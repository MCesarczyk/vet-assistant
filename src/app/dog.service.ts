import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Dog } from './dog';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  private log(message: string) {
    this.messageService.add(`DogService: ${message}`);
  }

  private dogsUrl = 'api/dogs';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl)
      .pipe(
        tap(_ => this.log('fetched dogs')),
        catchError(this.handleError<Dog[]>('getDogs', []))
      );
  }

  getDog(id: number): Observable<Dog> {
    const url = `${this.dogsUrl}/${id}`;
    return this.http.get<Dog>(url).pipe(
      tap(_ => this.log(`fetched dog id=${id}`)),
      catchError(this.handleError<Dog>(`getDog id=${id}`))
    );
  }
}
