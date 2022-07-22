import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {EmployeesService} from '../../../../services/pages/employees/employees.service'

@Component({
  selector: 'register-sick-leave',
  templateUrl: './register-sick-leave.component.html',
  styleUrls: ['./register-sick-leave.component.css']
})
export class RegisterSickLeaveComponent implements OnInit {

    // form: FormGroup;
    public sick_leave_request = {
        'employee_id' : '',
        'start_date' : '',
        'end_date' : '',
        'days' : ''
    }

    public employees;
    public title;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private employees_service: EmployeesService,
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.getEmployees();
  }

  public register() {

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
        title: ['', [Validators.required]],
        start: [new FormControl, [Validators.required]],
        end: [new FormControl, [Validators.required]],
    });

    getTitle() {
        return this.form.get('title');
    }

    getStart() {
        return this.form.get('start');
    }

    save() {
        const template_Title = this.title;
        console.log(template_Title);
    }
}
