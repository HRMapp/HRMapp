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
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { SickLeaveComponent } from './pages/sick-leave/sick-leave.component';
import { RegisterSickLeaveComponent } from './pages/sick-leave/register-sick-leave/register-sick-leave.component';
import {SearchEmployeesPipe} from '../pipes/pages/search-employees.pipe';
import { DatePipe } from '@angular/common';
import { SearchFirstNamePipe } from '../pipes/pages/search-first-name.pipe';
import { SearchLastNamePipe } from '../pipes/pages/search-last-name.pipe';
import { SearchPositionPipe } from '../pipes/pages/search-position.pipe';
import { SearchLocationPipe } from '../pipes/pages/search-location.pipe';
import { SearchDepartmentPipe } from '../pipes/pages/search-department.pipe';
import { PaginationPipe } from '../pipes/pages/pagination.pipe';
import { StartDatePipe } from '../pipes/pages/start-date.pipe';
import { EndDatePipe } from '../pipes/pages/end-date.pipe';
import { SortDataPipe } from '../pipes/pages/sort-data.pipe';
import { SearchTextPipe } from '../pipes/pages/search-text.pipe';
import { FormatDisplayedDatePipe } from '../pipes/pages/format-displayed-date.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatDialogModule


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
      SearchEmployeesPipe,
      SearchFirstNamePipe,
      SearchLastNamePipe,
      SearchPositionPipe,
      SearchLocationPipe,
      SearchDepartmentPipe,
      PaginationPipe,
      StartDatePipe,
      EndDatePipe,
      FormatDisplayedDatePipe,
      SearchTextPipe,
      SortDataPipe

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
      EmployeesComponent,
      LoginComponent,
      EmployeeProfileComponent,
      SickLeaveComponent,
      SearchEmployeesPipe,
      SearchFirstNamePipe,
      SearchLastNamePipe,
      SearchPositionPipe,
      SearchLocationPipe,
      SearchDepartmentPipe,
      PaginationPipe,
      StartDatePipe,
      EndDatePipe,
      FormatDisplayedDatePipe,
      SearchTextPipe,
      SortDataPipe
  ],
    providers: [
        DatePipe,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
})
export class ComponentsModule { }
