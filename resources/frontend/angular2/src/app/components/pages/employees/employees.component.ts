import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../../services/pages/employees/employees.service'
import {SalariesService} from '../../../services/pages/salaries/salaries.service'
import { MatDialog } from '@angular/material/dialog';
import {EmployeeProfileComponent} from '../employee-profile/employee-profile.component'

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    public employees;
    public past_employees;

  constructor(
      private employees_service: EmployeesService,
      private salaries_service: SalariesService,
      private dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.getEmployees();

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



}
