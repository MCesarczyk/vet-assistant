import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrl: './dog-search.component.scss'
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
