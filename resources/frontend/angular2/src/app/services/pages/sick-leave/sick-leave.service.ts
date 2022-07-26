import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class SickLeaveService {

    private headers;

    constructor(
        private http: HttpClient,
        private url: UrlBuilderService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }

    private api_url = this.url.base_url + '/sick-leave/';

    public get(): Observable<any> {
        return this.http.get(this.api_url, {headers: this.headers});
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.api_url + id, {headers: this.headers});
    }
}
