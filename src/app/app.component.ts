import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angularjs Version 2 Udemy!<h1>
    <app-other></app-other>
    <app-another>
          <div>
            <p>Hello</p>
            <p>World</p>
          </div>
    </app-another>
    <app-another>Something</app-another>
  `,
    styles:[`
      h1 {
          color: blue;
      }
    `]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
}
