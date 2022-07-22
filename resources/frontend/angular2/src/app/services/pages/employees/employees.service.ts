import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    private headers;

    constructor(
        private http: HttpClient,
        private url: UrlBuilderService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }


    public getEmployees(): Observable<any> {
        return this.http.get(this.url.base_url + '/employee', {headers: this.headers});
    }

    public getEmployee(): Observable<any> {
        return
    }

    public addEmployee(): Observable<any> {
        return
    }

    public editEmployee(): Observable<any> {
        return
    }

    public deleteEmployee(): Observable<any> {
        return
    }
}
