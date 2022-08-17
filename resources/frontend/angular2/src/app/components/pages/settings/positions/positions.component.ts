import { Component, OnInit, ViewChild } from '@angular/core';
import {PositionsService} from '../../../../services/pages/settings/positions.service';
import {PositionComponent} from './position/position.component';
import {trigger, style, animate, transition} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
  styleUrls: ['../settings.component.scss', './positions.component.scss'],
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
export class PositionsComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion;

    public loading = true;
    public positions = [];
    public position = {
        'name' : '',
        'job_description' : ''
    };

  constructor(
      private positions_service: PositionsService,
      private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
      this.get();
  }

    public get() {
        this.positions_service.get().subscribe(result => {
            this.positions = result;
            this.loading = false
        })
    }

    public add() {
        this.positions_service.add(this.position).subscribe(result => {
            if (result){
                this.get()
                this.position = {
                    'name' : '',
                    'job_description' : ''
                };
            }
        })
    }

    public delete(id) {
        this.positions_service.delete(id).subscribe(result => {
            if (result){
                this.get()
            }
        })
    }

    public edit() {

    }

    private showNotification(type: string, sick_leave?: any): any {
        let message = this.getNotificationMessage(type, sick_leave);
        (type == 'add' || type == 'edit' || type == 'delete') ? type = 'success' : '';

        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type,
            timer: 2000,
            placement: {
                from: "top",
                align: "right"
            },
            template:
                '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };

    private getNotificationMessage(type: string, sick_leave?: any): string {
        let message = 'Към текущия момент нямате служители във временна нетрудоспособност.';
        switch (type) {
            case 'warning':
                message = `Към днешна дата имате ${sick_leave.length} служител${sick_leave.length == 1 ? "" : "я"} във временна нетрудоспособност:`;
                message += sick_leave.map(s => {
                    return `<br>${s.first_name} ${s.last_name} (${s.position})`;
                });
                return message;
                break;
            case 'primary':
                message = `Очквате ${sick_leave.length} служител${sick_leave.length == 1 ? "" : "я"} да отсъства${sick_leave.length == 1 ? "" : "т"}  по здравословни причини в бъдещи периоди:`;
                message += sick_leave.map(s => {
                    return `<br>${s.first_name} ${s.last_name} (${s.position})`;
                });
                return message;
                break;
            case 'add':
                message = 'Успешно регистрирахте болничен лист на:';
                message += `<br>${sick_leave['employee'][0]['first_name']} ${sick_leave['employee'][0]['last_name']} (${sick_leave['employee'][0]['position']})`;
                message += `<br>за периода от ${sick_leave['sick_leave']['start_date']} до ${sick_leave['sick_leave']['end_date']}`;

                return message;
                break;
            case 'edit':
                message = 'Успешно променихте болничния лист на:';
                message += `<br>${sick_leave['employee'][0]['first_name']} ${sick_leave['employee'][0]['last_name']} (${sick_leave['employee'][0]['position']})`;
                message += `<br>за периода от ${sick_leave['sick_leave']['start_date']} до ${sick_leave['sick_leave']['end_date']}`;

                return message;
                break;
            case 'delete':
                message = 'Успешно изтрихте болничния лист на:';
                message += `<br>${sick_leave['first_name']} ${sick_leave['last_name']} (${sick_leave['position']})`;
                message += `<br>за периода от ${sick_leave['start_date']} до ${sick_leave['end_date']}`;
                return message;
                break;
            case 'danger':
                message = 'Възникна проблем, моля обърнете се към системния администратор.';
                return message;
                break;
            case 'info':
                return message;
                break;
            default:
                break;
        }
    };
}
