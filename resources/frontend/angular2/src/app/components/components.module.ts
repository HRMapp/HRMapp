import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { SickLeaveComponent } from './pages/sick-leave/sick-leave.component';
import { RegisterSickLeaveComponent } from './pages/sick-leave/register-sick-leave/register-sick-leave.component';
import {SearchEmployeesPipe} from '../pipes/pages/search-employees.pipe'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTooltipModule


  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeesComponent,
    LoginComponent,
    EmployeeProfileComponent,
    SickLeaveComponent,
    RegisterSickLeaveComponent,
      SearchEmployeesPipe

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
      EmployeesComponent,
      LoginComponent,
      EmployeeProfileComponent,
      SickLeaveComponent,
      SearchEmployeesPipe
  ]
})
export class ComponentsModule { }
