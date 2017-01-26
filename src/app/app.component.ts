import { Component } from '@angular/core';
import { SearchbarComponent } from './components/searchbar/searchbar.component'
import { DetailComponent } from './components/detail/detail.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  alert: IAlert;

  constructor() {
    this.title = 'This works!';
    this.alert = {
      type: 'success',
      text: 'This is an alert!',
      show: true,
    }
  }

  closeAlert() {
    this.alert.show = false;
  }

  optionSelected(element) {
    console.log(element);

  }
}

export interface IAlert {
  type: string;
  text: string;
  show: boolean;
}