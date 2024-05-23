import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Dog } from './dog';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  createDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.dogsUrl, dog, this.httpOptions).pipe(
      tap((newDog: Dog) => this.log(`added dog w/ id=${newDog.id}`)),
      catchError(this.handleError<Dog>('createDog'))
    );
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

  updateDog(dog: Dog): Observable<any> {
    return this.http.put(this.dogsUrl, dog, this.httpOptions).pipe(
      tap(_ => this.log(`updated dog id=${dog.id}`)),
      catchError(this.handleError<any>('updateDog'))
    );
  }

  deleteDog(dog: Dog | number): Observable<Dog> {
    const id = typeof dog === 'number' ? dog : dog.id;
    const url = `${this.dogsUrl}/${id}`;

    return this.http.delete<Dog>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted dog id=${id}`)),
      catchError(this.handleError<Dog>('deleteDog'))
    );
  }
}
