import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  template: `
    <div class="bg-white rounded-lg shadow-xl p-4" *ngIf="messageService.messages.length">
      <h2 class="text-red-700 text-3xl mb-4">Messages</h2>
      <button type="button" class="bg-gray-300 p-4 rounded mb-4 hover:bg-gray-200" (click)="messageService.clear()">Clear messages</button>
      <div *ngFor="let message of messageService.messages">{{message}}</div>
    </div>
  `,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }
}
