import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display$!: Observable<'open' | 'close'>;
  modalTitle = 'Получить прайс';
  titleButton= 'Заказать';
  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я-a-zA-Z]+$')]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern('^[+]?[0-9]{4}[-s.]?[0-9]{3}[-s.]?[0-9]{4,4}$'),
      ],
    ]
  });
  // phoneMask = { mask: '+{0}(000)000-0000' }; сделать маску на телефон

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  sendOrder(){

  }
}
