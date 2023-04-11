import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { TelegramResponseType } from 'src/app/types/telegramResponse.type';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display$!: Observable<'open' | 'close'>;
  modalTitle = 'Получить прайс';
  titleButton = 'Заказать';
  isOrderSendeng: boolean = false;
  orderForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern('^[а-яА-Я-a-zA-Z]+ [а-яА-Я-a-zA-Z]+$'),
      ],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern('^[+]?[0-9]{4}[-s.]?[0-9]{3}[-s.]?[0-9]{4,4}$'),
      ],
    ],
    email: ['', [Validators.email, Validators.required]],
  });
  // phoneMask = { mask: '+{0}(000)000-0000' }; сделать маску на телефон

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  sendOrder() {
    if (
      this.orderForm.value.name &&
      this.orderForm.value.phone &&
      this.orderForm.value.email
    ) {
      let userInfo = {
        name: this.orderForm.value.name,
        phone: this.orderForm.value.phone,
        email: this.orderForm.value.email,
      };
      this.requestService
        .sendUserInfoInTelegramm(userInfo)
        .subscribe((data: TelegramResponseType) => {
          console.log(data);

          if (data.ok === true) {
            this.modalTitle = 'Спасибо за вашу заявку!';
            this.titleButton = 'Ок';
            this.isOrderSendeng = true;
          }
        });
    }
  }
}
