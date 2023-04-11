import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{

  constructor(      private modalService: ModalService
    ){}

    ngOnInit():void{
    
    }
  serviceInfoList: { title: string; text: string; image: string }[] = [
    {
      title: 'Новые телефоны',
      text: 'с доставкой напрямую из Дубая, Японии или Китая',
      image: 'iphone12.jpg',
    },
    {
      title: 'Б/у телефоны',
      text: 'разных категорий, полностью проверенные',
      image: 'usedIphone.jpg',
    },
    {
      title: 'Новые ноутбуки ',
      text: 'С сервисглй гарантией, минимальный заказ от 10шт',
      image: 'macproViolet.jpg',
    },
    {
      title: 'Android смартфоны',
      text: 'Напрямую от производства, телефоны на Android доставка по запросу.',
      image: 'android.jpg',
    },
  ];

  open() {
    this.modalService.open();
  }
}
