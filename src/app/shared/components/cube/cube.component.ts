import { CommonModule } from '@angular/common';
import {  AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MainComponent } from 'src/app/views/main/main.component';
import Swiper, { Autoplay, EffectCube, Pagination, SwiperOptions } from 'swiper';
import {register} from 'swiper/element/bundle';
import { SwiperDirective } from '../../directives/swiper.directive';

@Component({
  selector: 'app-cube',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    SwiperDirective
  ],
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CubeComponent  implements OnInit, AfterViewInit{

  @ViewChild('swiper') swiperRef: ElementRef<HTMLElement & { swiper?: Swiper } & { initialize: () => void }> | undefined;
  swiper?: Swiper;

  public config: SwiperOptions = {
      modules:[EffectCube, Pagination, Autoplay],
      effect: "cube",
      speed: 3000,
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
      },
    }

  constructor() {
    
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // const swiperEl = Object.assign(this.swiperRef!.nativeElement, {
    //   modules:[EffectCube, Pagination, Autoplay],
    //   effect: "cube",
    //   speed: 4000,
    //   grabCursor: true,
    //   cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    //   },
    //   autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: true
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
    // swiperEl.initialize();

    // this.swiper = this.swiperRef!.nativeElement.swiper;
  }
}
