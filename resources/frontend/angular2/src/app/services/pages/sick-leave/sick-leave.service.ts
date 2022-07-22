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


    public getSickLeaves(): Observable<any> {
        return this.http.get(this.url.base_url + '/sick-leave', {headers: this.headers});
    }


}
