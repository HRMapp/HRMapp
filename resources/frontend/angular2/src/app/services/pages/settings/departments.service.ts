import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {

    private headers;
    private api_url = this.url.base_url + '/departments/';

    constructor(
        private http: HttpClient,
        private url: UrlBuilderService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }

    public get(): Observable<any> {
        return this.http.get(this.api_url, {headers: this.headers});
    }

    public add(department): Observable<any> {
        return this.http.post(this.api_url, department, {headers: this.headers});
    }

    public edit(department): Observable<any> {
        let id = department.id
        let options = {
            headers: this.headers
        }
        return this.http.put<any>(this.api_url + id, department, options);
    }

    public delete(department_id: number): Observable<any> {
        return this.http.delete<any>(this.api_url + department_id, {headers: this.headers});
    }
}

