import { Component, OnInit } from '@angular/core';
import {SickLeaveService} from '../../../services/pages/sick-leave/sick-leave.service'
import {RegisterSickLeaveComponent} from './register-sick-leave/register-sick-leave.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'sick-leave-requests',
  templateUrl: './sick-leave-requests.component.html',
  styleUrls: ['./sick-leave-requests.component.css']
})
export class SickLeaveRequestsComponent implements OnInit {

    public sick_leave_requests;

  constructor(
      private sick_leave_service: SickLeaveService,
      private dialog: MatDialog
  ) { }

  ngOnInit(): void {
        this.sick_leave_service.getSickLeaves().subscribe(
            result => {
                this.sick_leave_requests = result.sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
            }
        )
  }

    changeBackground(end_date): any {

        return (new Date() < new Date(end_date)) ?  "card-header-warning" : null;
    }

    public add(){
        this.dialog.open(RegisterSickLeaveComponent, {
            data: {
            },
            autoFocus: false,
            disableClose: false
        });
    }
}
