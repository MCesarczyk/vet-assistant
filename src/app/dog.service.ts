import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getDogs(): Observable<Dog[]> {
    this.messageService.add('DogService: dogs fetched successfully!');
    return this.http.get<Dog[]>(this.dogsUrl);
  }

  getDog(id: number): Observable<Dog> {
    this.messageService.add(`DogService: fetched dog id=${id}`);
    return this.http.get<Dog>(`${this.dogsUrl}/${id}`);
  }
}
