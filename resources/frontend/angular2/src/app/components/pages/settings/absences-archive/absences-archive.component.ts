import { Component, OnInit, ViewChild } from '@angular/core';
import {DatePipe} from '@angular/common'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeesService} from '../../../../services/pages/employees/employees.service';
import {AbsenceTypesService} from '../../../../services/pages/settings/absence-types.service'
import {AbsencesService} from '../../../../services/pages/absences/absences.service'
import {Employee} from '../../../../classes/pages/employee'
import {SwalService} from "../../../../services/helpers/swal/swal.service";

@Component({
  selector: 'absences-archive',
  templateUrl: './absences-archive.component.html',
  styleUrls: ['./absences-archive.component.scss']
})
export class AbsencesArchiveComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion;
    public loading = true;
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
        'cost': '',
        'archive': '',
    }

  constructor(
      private employees_service: EmployeesService,
      private absence_types_service: AbsenceTypesService,
      private absences_service: AbsencesService,
      public datepipe: DatePipe,
      private fb: FormBuilder,
      private swal_service: SwalService,
  ) { }

  ngOnInit(): void {
  }

}
