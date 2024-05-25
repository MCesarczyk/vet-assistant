import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col gap-4">
      <header class="bg-slate-900 text-white py-4 px-8 flex flex-col md:flex-row gap-8">
        <h1 class="text-3xl font-bold">{{title}}</h1>
        <nav class="flex items-center">
          <ul class="flex gap-4 items-center">
            <li class="hover:scale-105"><a routerLink="/dashboard">Dashboard</a></li>
            <li class="hover:scale-105"><a routerLink="/dogs">Dogs</a></li>
          </ul>
        </nav>
      </header>
      <main class="px-8">
        <router-outlet></router-outlet>
        <app-messages></app-messages>
        <app-dog-form></app-dog-form>
      </main>
    </div>
  `,
})
export class AppComponent {
  title = 'Vet assistant';
}
