import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { Dog } from '../dog';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dog-detail',
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss'
})
export class DogDetailComponent {
  @Input() dog?: Dog;
}
