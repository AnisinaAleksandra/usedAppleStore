import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private tg: { token: string; chat_id: string } = {
    token: '6261949453:AAFZEimexGh4naK0qB_pcsE_Y39pmK7Cjo4',
    chat_id: '1001264132',
  };
  private url: string = `https://api.telegram.org/bot${this.tg.token}/sendMessage`;
  constructor(private http: HttpClient) {}
  sendUserInfoInTelegramm(userInfo: {
    email: string;
    name: string;
    phone: string;
  }): Observable<any> {
    const objInfo = {
      chat_id: this.tg.chat_id,
      text: `Заказ прайса ${userInfo!.name} ${userInfo!.email} ${userInfo!.phone}`,
    };
    console.log(userInfo);

    return this.http.post<any>(this.url, objInfo);
  }
}
