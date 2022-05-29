import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';
  name: string = 'Limbert';
  age: number = 45;
  phone: null = null
}
