import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private headers;

    constructor(
        private http: HttpClient,
        private url: UrlBuilderService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }


    public getUser(): Observable<any> {
        return this.http.get(this.url.base_url + '/users/me', {headers: this.headers});
    }

    public getUsers(): Observable<any> {
        return this.http.get(this.url.base_url + '/users', {headers: this.headers});
    }


    public register(formData): Observable<any> {
        return this.http.post(this.url.base_url + '/users/register', formData, {headers: this.headers});
    }
}
