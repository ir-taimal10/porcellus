import {Component, ViewChild, OnInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  example1SwipeOptions: any;

  constructor() {
    this.example1SwipeOptions = {
      speed: 400,
      spaceBetween: 100
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
