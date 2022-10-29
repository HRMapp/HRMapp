import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../../../services/pages/employees/employees.service';
import {SalariesService} from '../../../services/pages/salaries/salaries.service';
import {AbsencesArchiveService} from '../../../services/pages/settings/absences-archive.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeProfileComponent} from '../employee-profile/employee-profile.component';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    public filter_current = '';
    public filter_past = '';
    public employees;
    public past_employees;
    private absences_archive;

    constructor(
        private employees_service: EmployeesService,
        private salaries_service: SalariesService,
        private absence_archive_service: AbsencesArchiveService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.getEmployees();
        this.getAbsenceArchive();

        // this.url_path = this.platformLocation.protocol + this.platformLocation.hostname;
        // console.log(this.url_path)
        // this.http.get(this.url_path).subscribe(
        //     result => {
        //         console.log(result);
        //         this.employees = result;
        //     }, error => {
        //         console.log(error);
        //     }
        // )
    }

    private getAbsenceArchive(): void {
        this.absence_archive_service.get().subscribe(result => {
            this.absences_archive = result;
        });
    }

    private getEmployees(): void {
        this.employees_service.getEmployees().subscribe(
            result => {
                console.log(result)
                this.employees = result.filter(e => {
                    return e.end == null;
                })
                this.past_employees = result.filter(e => {
                    return e.end != null;
                })
                console.log(this.employees)
                console.log(this.past_employees)
            }, error => {
                console.log(error);
            }
        )
    }

    public openProfile(profile?) {
        this.dialog.open(EmployeeProfileComponent, {
            data: {
                employee: profile,
                action: 'edit'
            },
            autoFocus: false,
            disableClose: false
        });
    }

    public editProfile(profile?) {
        this.dialog.open(EmployeeProfileComponent, {
            data: {
                employee: profile,
                action: 'create'
            },
            autoFocus: false,
            disableClose: false
        });
    }

    public filteringCurrent(event: Event): void {
        this.filter_current = String(event);
        console.log(event);
    }

    public filteringPast(event: Event): void {
        this.filter_past = String(event);
        console.log(event);
    }
}
