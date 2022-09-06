import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    private headers;
    private api_url = this.url.base_url + '/positions';

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

    public add(position): Observable<any> {
        return this.http.post(this.api_url, position, {headers: this.headers});
    }

    public edit(position): Observable<any> {
        let id = position.id
        let options = {
            headers: this.headers
        }
        return this.http.put<any>(this.api_url + '/' + id, position, options);
    }

    public delete(position_id: number): Observable<any> {
        return this.http.delete<any>(this.api_url + '/' + position_id, {headers: this.headers});
    }
}

