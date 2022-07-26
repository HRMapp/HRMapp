import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators, FormControl, FormsModule} from '@angular/forms';
import {EmployeesService} from '../../../../services/pages/employees/employees.service'
import {Employee} from '../../../../classes/pages/employee'

@Component({
    selector: 'register-sick-leave',
    templateUrl: './register-sick-leave.component.html',
    styleUrls: ['./register-sick-leave.component.scss']
})
export class RegisterSickLeaveComponent implements OnInit {

    public is_edit = false;
    public filter = '';
    public employees: Array<Employee> = [];
    public sick_leave_request = {
        'id': '',
        'employee_id': '',
        'start_date': '',
        'end_date': '',
        'days': '',
        'cost': ''
    };




    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private employees_service: EmployeesService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.is_edit = (this.data?.s_request) ? true : false;
        (this.is_edit) ? this.injectEditData() : '';

        this.getEmployees();

    }

    private injectEditData(): void {
        this.sick_leave_request = {
            'id': this.data.s_request.id,
            'employee_id': this.data.s_request.employee_id,
            'start_date': this.data.s_request.start_date,
            'end_date': this.data.s_request.end_date,
            'days': this.data.s_request.days,
            'cost': this.data.s_request.cost
        }
    }

    public add() {

    }

    public edit(){

    }

    public close(){
    }

    private getEmployees(): void {
        this.employees_service.getEmployees().subscribe(
            result => {
                console.log(result)
                this.employees = result
            }, error => {
                console.log(error);
            }
        )
    }

    form = this.fb.group({
        employee_id: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        days: ['', [Validators.required]],
        cost: '',
    });


    save() {

    }

    public filtering(event: Event): void {
        this.filter = String(event);
        console.log(event);
    }
}
