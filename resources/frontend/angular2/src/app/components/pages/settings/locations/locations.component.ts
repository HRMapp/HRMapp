import { Component, OnInit, ViewChild } from '@angular/core';
import {LocationsService} from '../../../../services/pages/settings/locations.service'
import {trigger, style, animate, transition} from '@angular/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['../settings.component.scss', './locations.component.scss'],
    animations: [
        trigger(
            'enterFromBottom', [
                transition(':enter', [
                    style({transform: 'translateY(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateY(0)', opacity: 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
                ])
            ]
        )
    ]
})
export class LocationsComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion;

    public loading = true;
    public locations = [];
    public location = {
        'city' : '',
        'address' : '',
        'post_code' : '',
        'country' : ''
    };

  constructor(
      private locations_service: LocationsService
  ) { }

  ngOnInit(): void {
      this.get()
  }
    public get() {
        this.locations_service.get().subscribe(result => {
            this.locations = result;
            this.loading = false
        })
    }

    public add() {
        this.locations_service.add(this.location).subscribe(result => {
            if (result){
                this.get()
                this.location = {
                    'city' : '',
                    'address' : '',
                    'post_code' : '',
                    'country' : ''
                };
            }
        })
    }

    public delete(id) {
        this.locations_service.delete(id).subscribe(result => {
            if (result){
                this.get()
            }
        })
    }

    public edit() {

    }
}
