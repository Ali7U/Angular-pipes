import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameChange: string = '';
  date: string = '';
  amount: number | any;
  hight: number = 0

  car = {
    make: "Toyota",
    model: 'camry', 
    year: 2000
  }

  miles : number = 0;
}
