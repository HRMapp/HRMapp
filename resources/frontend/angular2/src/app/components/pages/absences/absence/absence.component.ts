import {Component, OnInit, Inject} from '@angular/core';
import {DatePipe} from '@angular/common'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators, FormControl, FormsModule} from '@angular/forms';
import {EmployeesService} from '../../../../services/pages/employees/employees.service';
import {AbsenceTypesService} from '../../../../services/pages/settings/absence-types.service'
import {AbsencesService} from '../../../../services/pages/absences/absences.service'
import {Employee} from '../../../../classes/pages/employee'
import {SwalService} from "../../../../services/helpers/swal/swal.service";


import {SickLeaveService} from '../../../../services/pages/sick-leave/sick-leave.service';

@Component({
    selector: 'absence',
    templateUrl: './absence.component.html',
    styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

    public loader = true
    public filter = '';
    public employees: Array<Employee> = [];

    public absence_types = [];
    public absence = {
        'id': '',
        'employee_id': '',
        'type': '',
        'start_date': '',
        'end_date': '',
        'approval': '',
        'approval_status': '',
        'days': '',
        'archive': '',
    }

    public form = this.fb.group({
        employee_id: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        days: ['', [Validators.required]]
    });

    private absences_archive;
    public available_days;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private employees_service: EmployeesService,
        private absence_types_service: AbsenceTypesService,
        private absences_service: AbsencesService,
        public datepipe: DatePipe,
        private fb: FormBuilder,
        private swal_service: SwalService,
        private dialogRef: MatDialogRef<any>
    ) {
    }

    ngOnInit(): void {
        (this.data?.absence) ? this.injectEditData() : '';
        this.getEmployees();
        this.getAbsenceTypes();
        this.absences_archive = this.data?.absences_archive;
    };

    private injectEditData(): void {
        this.absence = {
            'id': this.data.absence.id,
            'employee_id': this.data.absence.employee_id,
            'type': this.data.absence.type,
            'start_date': this.data.absence.start_date,
            'end_date': this.data.absence.end_date,
            'approval': this.data.approval.end_date,
            'approval_status': this.data.approval_status.end_date,
            'days': this.data.absence.days,
            'archive': this.data.absence.archive,
        }
    };

    private getAbsenceTypes(): void {
        this.loader = true;
        this.absence_types_service.get().subscribe(
            result => {
                if (result) {
                    this.absence_types = result;
                } else {
                    this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????????? ???? ????????????:' + result});
                }
            }, error => {
                this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????????? ???? ????????????: ' + error.message});
            }
        )
        this.loader = false;
    }

    public getAbsenceType(id: number) {
        return this.absence_types.filter(type => {
            return type.id == id;
        })
    }

    public add(): void {
        if (this.form.valid) {
            this.absence.start_date = this.datepipe.transform(this.absence.start_date, 'YYYY-MM-dd');
            this.absence.end_date = this.datepipe.transform(this.absence.end_date, 'YYYY-MM-dd');

            this.absences_service.add(this.absence).subscribe(
                result => {
                    if (result) {
                        this.dialogRef.close(
                            this.getResponseData()
                        );
                    } else {
                        this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????? ???? ??????????a:' + result});
                    }
                }, error => {
                    this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????? ???? ??????????a: ' + error.message});
                }
            )
        }
    };

    public edit(): void {
        if (this.form.valid) {
            this.absence.start_date = this.datepipe.transform(this.absence.start_date, 'YYYY-MM-dd');
            this.absence.end_date = this.datepipe.transform(this.absence.end_date, 'YYYY-MM-dd');

            this.absences_service.edit(this.absence).subscribe(
                result => {
                    if (result) {
                        this.dialogRef.close(
                            this.getResponseData()
                        );
                    } else {
                        this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????????? ???? ????????????:' + result});
                    }
                }, error => {
                    this.swal_service.error({text: '???????????????? ???????????? ?????? ???????????????????????? ???? ????????????: ' + error.message});
                }
            )
        }
    };

    private getEmployees(): void {
        this.loader = true;
        this.employees_service.getEmployees().subscribe(
            result => {
                this.employees = result
            }, error => {
                this.swal_service.error({text: '???????????????? ???????????? ?????? ?????????????????????? ???? ?????????????? ???? ??????????????????????: ' + error.message});
            }
        )
        this.loader = false;
    };

    public filtering(event: Event): void {
        this.filter = String(event);
    };

    private getResponseData(): any {
        return {
            'absence': this.absence,
            'employee': this.employees.filter(e => e.id == this.absence.employee_id)
        };
    };

    public calcAvailableDays(employee_id) {
        if (this.absence.employee_id) {
            this.available_days = Math.random();

            let archived = this.absences_archive.find(el => {
                return el.employee_id === employee_id && this.absence.type == el.type_id;
            })

            this.available_days = this.calcPaidDaysAfterArchivedDate(archived.due_date) + archived.days
        }
    }

    private calcPaidDaysAfterArchivedDate(archive_due_date){

        let [year, month, day] = archive_due_date.split('-');
        let date = `${month}/${day}/${year}`;

        return Math.floor(((new Date().getTime() - new Date(date).getTime())/ (1000 * 3600 * 24)) / 18.25);
    }


}
