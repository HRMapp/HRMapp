import { Component, OnInit, NgModule, AfterViewInit } from '@angular/core';
import {SickLeaveService} from '../../../services/pages/sick-leave/sick-leave.service'
import {RegisterSickLeaveComponent} from './register-sick-leave/register-sick-leave.component'
import { MatDialog } from '@angular/material/dialog';
// import Swal from 'sweetalert2'
import {SwalService} from "../../../services/helpers/swal/swal.service";
declare var $: any;


@Component({
  selector: 'sick-leave',
  templateUrl: './sick-leave.component.html',
  styleUrls: ['./sick-leave.component.scss']
})
export class SickLeaveComponent implements OnInit {

    public filter_current = '';
    public filter_past = '';

    public sick_leave_requests = [];
    public past_sick_leave_requests = [];

    public ongoing_leaves = [];

  constructor(
      private sick_leave_service: SickLeaveService,
      private dialog: MatDialog,
      private swal_service: SwalService
  ) { }

  ngOnInit(): void {
       this.get();

  }

  private get():void {
      this.sick_leave_service.get().subscribe(
          result => {
              this.sick_leave_requests = result.filter(r => {
                  return + new Date(r.end_date).getFullYear() >= + new Date().getFullYear();
              });
              this.past_sick_leave_requests = result.filter(r => {
                  return new Date(r.end_date).getFullYear() < new Date().getFullYear();
              })

              this.sick_leave_requests.sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
              this.past_sick_leave_requests.sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
              this.showNotification(result);
          }
      )
  }

    changeBackground(end_date): any {
        return (new Date() < new Date(end_date)) ?  "text-warning" : null;
    }

    public add(){
        this.dialog.open(RegisterSickLeaveComponent, {
            data: {
            },
            autoFocus: false,
            disableClose: false
        });
    }

    public edit(s_request){
        this.dialog.open(RegisterSickLeaveComponent, {
            data: {
                s_request
            },
            autoFocus: false,
            disableClose: false
        });
    }

    public delete(s_request): void { //public delete(request: ApiKey): void {
        this.swal_service.confirm({text:
                'Сигурни ли сте, че желаете да изтриете болничния запис на ' +
                s_request.first_name + " " + s_request.last_name + " за периода от " +
                s_request.start_date + " до " + s_request.end_date + " ?"
            })
            .then(r => {
                if (r.isConfirmed) {
                    this.sick_leave_service.delete(s_request.id).subscribe(result => {
                        if (result) {
                            this.swal_service.success({text: `Записът беше изтрит.`});
                            this.get();
                        }
                    }, error => {
                        this.swal_service.error({text: 'Възникна грешка при изтриването на болничния запис: ' + error.message});
                    });
                }
            });
    }

    showNotification(result){
        this.getOngoingLeaves(result);
        const type = this.getNotificationType();

        $.notify({
            icon: "notifications",
            // message: this.ongoing_leaves + "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
            message: this.getNotificationMessage(type)
        },{
            type: type,
            timer: 4000,
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
    }

    private getOngoingLeaves(result){
        this.ongoing_leaves = result.filter(e => {
            return new Date(e.end_date) > new Date();
        })
    }
    private getNotificationType(){
      return (this.ongoing_leaves.length == 0) ? 'info' : 'warning'
    }

    private getNotificationMessage(type){
      switch (type) {
          case 'warning':
              return "Към днешна дата имате <b>" + this.ongoing_leaves.length + " <b> служител във временна нетрудоспособност"
              break;
          default:
             return  "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
      }
    }

    public showProile(employee_id){

    }

    public filteringCurrent(event: Event): void {
        this.filter_current = String(event);
    }

    public filteringPast(event: Event): void {
        this.filter_past = String(event);
    }
}
