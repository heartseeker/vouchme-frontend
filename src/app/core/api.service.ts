import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) {}

    get<T>(url: string, type: string = 'services'): Observable<T> {
        return (this.http.get(`${environment.api_endpoint}${url}`)).pipe(
            catchError((err: any) => {
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    post<T>(url: string, body?: any, type: string = 'services'): Observable<T> {
        return (this.http.post(`${environment.api_endpoint}${url}`, body)).pipe(
            catchError((err: any) => {
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    put<T>(url: string, body?: any, type: string = 'services'): Observable<T> {
        return (this.http.put(`${environment.api_endpoint}${url}`, body)).pipe(
            catchError((err: any) => {
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    delete<T>(url: string, type: string = 'services'): Observable<T> {
        return (this.http.delete(`${environment.api_endpoint}${url}`)).pipe(
            catchError((err: any) => {
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }
}
