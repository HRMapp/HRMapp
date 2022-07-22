import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';
import {EmployeeProfileService} from '../../../services/pages/employee-profile/employee-profile.service'
import {UsersService} from '../../../services/helpers/users/users.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {EmployeesService} from '../../../services/pages/employees/employees.service'

@Component({
  selector: 'employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

    public user;
    public employee = {
    'first_name' : '',
    'surname' : '',
    'last_name' : '',
    'department' : '',
    'position' : '',
    'location' : '',
    'work_phone' : '',
    'personal_phone' : '',
    'email' : '',
    'post_code' : '',
    'start' : '',
    'pin' : '',
    'city' : '',
    'country' : '',
    'address' : '',
    'supervisors' : '',
    'salary' : ''
};
    public is_edit;
    public is_new;
    public action = 'view';
    public supervisors;
    public employees;
    form: FormGroup

    constructor(
        private http: HttpClient,
        private platformLocation: PlatformLocation,
        private router: Router,
        private employee_profile_service: EmployeeProfileService,
        private users_service: UsersService,
        private fb: FormBuilder,
        private employees_service: EmployeesService,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

    ngOnInit(): void {
        this.employees_service.getEmployees().subscribe(
            result => {
                this.employees = result

            }, error => {
                console.log(error);
            }
        )

        if (this.data.length > 0) {
            this.action = this.data['action'];
        }

        if (this.action === 'edit') {
            this.employee = this.data['employee'];
        }

        if (this.action === 'view') {
            this.getEmployee();

        }



        // const headers = new HttpHeaders({
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`
        // });
        //
        // this.http.get('http://' + this.platformLocation.hostname + '/user', {headers: headers}).subscribe(
        //     result => {
        //         this.user = result;
        //         console.log(result)
        //         console.log(headers)
        //         this.http.get('http://' + this.platformLocation.hostname + '/employee/' + result['id'], {headers: headers}).subscribe(
        //             r => {
        //                 this.employee = r;
        //             }
        //         )
        //     },
        //     err => {
        //         localStorage.removeItem('token');
        //         this.router.navigate(['/login']);
        //     }
        // )

        // Registraciq //
        this.form = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required]
        })

    }




    public getUsers(): void {
        this.users_service.getUsers().subscribe(
            result => {
                console.log(result)
            }, error => {
                console.log(error);
            }
        )
    }

    public getUser(): void {
        this.users_service.getUser().subscribe(
            result => {
                setTimeout(() => {
                }, 1000);
                this.user = result;
                console.log(result)
            }, error => {
                console.log(error);
            }
        )
    }

    public register(){
        const formData = this.form.getRawValue();

        this.users_service.register(formData).subscribe(
            result => {
                console.log(result);
            }, error => {
                console.log(error);
            }
        )
    }

    public getEmployee(){
        this.users_service.getUser().subscribe(
            result => {
                setTimeout(() => {
                }, 1000);
                this.employee_profile_service.getEmployee(result['id']).subscribe( result => {
                        if (result) {
                            this.employee = result;

                        }
                    }
                )
            }, error => {
                console.log(error);
            }
        )
    }

    public getSupervisors(supervisors?){
        if (supervisors){
            supervisors.forEach(supervisor => {
                this.employee_profile_service.getEmployee(supervisor).subscribe( result => {
                        if (result) {
                            this.supervisors.push(result['first_name'])
                        }
                    }
                )
            })
        }
    }

    public getMonthDifference() {
        let startDate = new Date(this.employee['start']);
        let endDate = new Date();
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    public someDatetest(){
        console.log(this.getMonthDifference());
    }

}
