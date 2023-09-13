import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() item: { title: string; text: string; image: string } =   {
    title: '',
    text: '',
    image: '',
  };
  imageFolderPath: string = '';
  ngOnInit(): void {
    this.imageFolderPath = `background-image: url(assets/images/${this.item!.image})`;
    
  }
}
