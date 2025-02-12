import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    private apiServer = "http://localhost:3000/php-backend";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private httpClient: HttpClient) { }

    create(item): Observable<any> {
        return this.httpClient.post<any>(this.apiServer + '/create.php', JSON.stringify(item), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }

    getById(id): Observable<any> {
        return this.httpClient.get<any>(this.apiServer + '/read.php?id=' + id)
            .pipe(catchError(this.errorHandler));
    }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiServer + '/read.php')
            .pipe(catchError(this.errorHandler));
    }

    update(id, item): Observable<any> {
        return this.httpClient.put<any>(this.apiServer + '/update.php', JSON.stringify(item), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }

    delete(id): Observable<any> {
        return this.httpClient.delete<any>(this.apiServer + '/delete.php?id=' +id, this.httpOptions)
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