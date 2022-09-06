import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlBuilderService} from '../../helpers/url-builder/url-builder.service'

@Injectable({
    providedIn: 'root'
})
export class AbsencesService {

    private headers;

    constructor(
        private http: HttpClient,
        private url: UrlBuilderService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
    }

    private api_url = this.url.base_url + '/absences';

    public get(): Observable<any> {
        return this.http.get(this.api_url, {headers: this.headers});
    }

    public add(absence): Observable<any> {
        return this.http.post(this.api_url, absence, {headers: this.headers});
    }

    public edit(absence): Observable<any> {
        let id = absence.id
        let options = {
            headers: this.headers
        }
        return this.http.put<any>(this.api_url + '/' + id, absence, options);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.api_url + '/' + id, {headers: this.headers});
    }

    public export(){
        return this.http.get(this.api_url + '/' + 'export', {headers: this.headers});
    }
}
