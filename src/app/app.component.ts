import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Reserve your table', url: '/table-list', icon: 'mail' }
  ];
  public labels = ['Family'];

  constructor() {}
}
