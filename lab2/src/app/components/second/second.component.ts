import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  selected = 0;
  interval: any;

  images = [
    '../../assets/images/image1.webp',
    '../../assets/images/image2.jpg',
    '../../assets/images/image3.jpg',
    '../../assets/images/image4.jpg',
  ];

  next() {
    if (this.selected != this.images.length - 1) this.selected += 1;
  }

  prev() {
    if (this.selected != 0) this.selected -= 1;
  }

  slide() {
    this.interval = setInterval(() => {
      if (this.selected != this.images.length - 1) this.selected += 1;
      else this.selected = 0;
    }, 3000);
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
  }
}
