import { Component, OnInit, ViewChild } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'official-holidays',
  templateUrl: './official-holidays.component.html',
  styleUrls: ['../settings.component.scss', './official-holidays.component.scss']
})
export class OfficialHolidaysComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
