import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class AbsenceTypesService {

    private headers;
    private api_url = this.url.base_url + '/absence-types/';

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

    public add(absence_type): Observable<any> {
        return this.http.post(this.api_url, absence_type, {headers: this.headers});
    }

    public edit(absence_type): Observable<any> {
        let id = absence_type.id
        let options = {
            headers: this.headers
        }
        return this.http.put<any>(this.api_url + id, absence_type, options);
    }

    public delete(absence_type: number): Observable<any> {
        return this.http.delete<any>(this.api_url + absence_type, {headers: this.headers});
    }
}

