import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    private apiServer = "http://localhost:3000";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private httpClient: HttpClient) { }

    create(item): Observable<any> {
        return this.httpClient.post<any>(this.apiServer + '/items/', JSON.stringify(item), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }

    getById(id): Observable<any> {
        return this.httpClient.get<any>(this.apiServer + '/items/' + id)
            .pipe(catchError(this.errorHandler));
    }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/items/')
            .pipe(catchError(this.errorHandler));
    }

    update(id, item): Observable<any> {
        return this.httpClient.put<any>(this.apiServer + '/items/' + id, JSON.stringify(item), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }

    delete(id): Observable<any> {
        return this.httpClient.delete<any>(this.apiServer + '/items/' + id, this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}