import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vet assistant';
}
