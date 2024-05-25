import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-search',
  template: `
    <div id="search-component" class="flex flex-col gap-4">
      <label for="search-box" class="text-3xl text-red-700">Dog search</label>
      <input id="search-box" placeholder="Search for dogs..." #searchBox (input)="search(searchBox.value)" class="py-2 px-4 rounded-lg border shadow-xl"/>

      <ul class="search-result">
        <li *ngFor="let dog of dogs$ | async">
          <a routerLink="/dog/{{dog.id}}">
            {{dog.name}}
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class DogSearchComponent implements OnInit{
  dogs$!: Observable<Dog[]>;
  private searchTerms = new Subject<string>();

  constructor(private dogService: DogService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dogs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.dogService.searchDogs(term)),
    );
  }
}
