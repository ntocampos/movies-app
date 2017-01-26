import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  query: string;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    console.log('onChange(): ' + this.query);
  }
}
