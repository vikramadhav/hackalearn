import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [NgbCarouselConfig]
})
export class FirstComponent implements OnInit {
  images = [700, 533, 807, 124,62, 83, 466, 965, 982, 1043, 738,944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/1024`);
  constructor(config: NgbCarouselConfig) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
