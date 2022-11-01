import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class LocationsService {

    private headers;
    private api_url = this.url.base_url + '/locations/';

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

    public add(location): Observable<any> {
        return this.http.post(this.api_url, location, {headers: this.headers});
    }

    public edit(location): Observable<any> {
        let id = location.id
        let options = {
            headers: this.headers
        }
        return this.http.put<any>(this.api_url + id, location, options);
    }

    public delete(location_id: number): Observable<any> {
        return this.http.delete<any>(this.api_url + location_id, {headers: this.headers});
    }
}

