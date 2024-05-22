import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss'
})
export class DogDetailComponent {
  @Input() dog?: Dog;

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
}
