import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vet assistant';
}
