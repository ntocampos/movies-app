import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;

  constructor() {
  }

  ngOnInit() {
    if (this.src == null) {
      this.src = "http://placehold.it/300x400";
    }
  }
}
