import { Component, OnInit, EventEmitter , Output , Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PlatformLocation } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private platform_location: PlatformLocation,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.form = this.fb.group({
              email: '',
              password: ''
          }
      )
  }

    login(){
        console.log(this.form.getRawValue());
        const formData = this.form.getRawValue();

        const data = {
            username: formData.email,
            password: formData.password,
            grant_type: 'password', // password , client_credentials
            client_id: '2',
            client_secret: 'eZYTB9xw5wOXs29KlWubDpJaLgrd8tAw1AKM1Us8',
            scope: '*'
        };
        this.http.post(this.platform_location.protocol + '//' + this.platform_location.hostname + '/oauth/token', data).subscribe(
            (result: any) =>{
                console.log('success');
                console.log(result);
                localStorage.setItem('token', result.access_token);
                console.log(localStorage);
                this.router.navigate(['/']);
            },
            error => {
                console.log('error');
                console.log(error);
            }
        );
    }

    @Input() error: string | null;

    @Output() submitEM = new EventEmitter();
}
