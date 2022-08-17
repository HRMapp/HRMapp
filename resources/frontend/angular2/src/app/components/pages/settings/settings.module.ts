import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartmentsComponent} from './departments/departments.component';
import {LocationsComponent} from './locations/locations.component';
import {PositionsComponent} from './positions/positions.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { PositionComponent } from './positions/position/position.component';
import { AbsenceTypesComponent } from './absence-types/absence-types.component';
import { OfficialHolidaysComponent } from './official-holidays/official-holidays.component';
import { AbsencesArchiveComponent } from './absences-archive/absences-archive.component';


@NgModule({
    declarations: [
        DepartmentsComponent,
        LocationsComponent,
        PositionsComponent,
        PositionComponent,
        AbsenceTypesComponent,
        OfficialHolidaysComponent,
        AbsencesArchiveComponent,
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatChipsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DepartmentsComponent,
        LocationsComponent,
        PositionsComponent,
        PositionComponent,
        AbsenceTypesComponent,
        AbsencesArchiveComponent,
        OfficialHolidaysComponent,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SettingsModule {
}
