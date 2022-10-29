import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {EmployeesComponent} from './pages/employees/employees.component';
import {LoginComponent} from './login/login.component';

import {EmployeeProfileComponent} from './pages/employee-profile/employee-profile.component';
import {SickLeaveComponent} from './pages/sick-leave/sick-leave.component';
import {RegisterSickLeaveComponent} from './pages/sick-leave/register-sick-leave/register-sick-leave.component';
import {AbsencesComponent} from './pages/absences/absences.component';
import {AbsenceComponent} from './pages/absences/absence/absence.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SettingsModule} from './pages/settings/settings.module';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PipesModule} from '../pipes/pipes.module'



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
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatChipsModule,
        MatTabsModule,
        MatFormFieldModule,
        SettingsModule,
        PipesModule

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
        AbsencesComponent,
        AbsenceComponent,
        SettingsComponent,

    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        EmployeesComponent,
        LoginComponent,
        EmployeeProfileComponent,
        SickLeaveComponent,
        AbsencesComponent,
        SettingsComponent,
    ],
    providers: [
    ],
})
export class ComponentsModule {
}
