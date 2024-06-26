import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col gap-8">
      <header class="bg-slate-900 text-white py-4 px-8 flex flex-col md:flex-row gap-8">
        <h1 class="text-3xl font-bold">{{title}}</h1>
        <nav class="flex items-center">
          <ul class="flex gap-4 items-center">
            <li class="hover:scale-105"><a routerLink="/dashboard">Dashboard</a></li>
            <li class="hover:scale-105"><a routerLink="/dogs">Dogs</a></li>
          </ul>
        </nav>
      </header>
      <main class="px-2 md:px-8 flex flex-col gap-4 md:gap-8">
        <router-outlet></router-outlet>
        <app-messages></app-messages>
        <button *ngIf="!isFormVisible" (click)="showForm()" class="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-xl md:w-48">Add new dog</button>
        <app-dog-form *ngIf="isFormVisible" (onFormFinish)="hideForm()"></app-dog-form>
      </main>
    </div>
  `,
})
export class AppComponent {
  title = 'Vet assistant';
  isFormVisible = false;

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }
}
