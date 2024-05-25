import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-detail',
  template: `
    <div *ngIf="dog" class="bg-white rounded-xl shadow-xl p-4 text-xl flex flex-col gap-2">
      <h2 class="text-3xl text-red-700">{{dog.name | uppercase}} Details</h2>
      <div><span class="text-gray-500">id: </span>{{dog.id}}</div>
      <div>
        <label for="dog-name" class="text-gray-500">Dog name: </label>
        <input id="dog-name" [(ngModel)]="dog.name" placeholder="name" class="p-2 border border-gray-300 rounded-xl">
      </div>
      <div class="flex gap-2 text-white">
        <button type="button" (click)="save()" class="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl">save</button>
        <button type="button" (click)="goBack()" class="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl">back</button>
      </div>
    </div>
  `,
})
export class DogDetailComponent implements OnInit {
  dog: Dog | undefined;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dogService.getDog(id)
      .subscribe(dog => this.dog = dog);
  }

  save(): void {
    if (this.dog) {
      this.dogService.updateDog(this.dog)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
