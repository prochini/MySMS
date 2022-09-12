import { SMSService } from './sms.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  SMSService:SMSService;

  //依賴 service 回傳的訊息
  showMessage(){
    this.SMSService.sendMessage();
  }
  
  constructor() { 
    this.SMSService = new SMSService();
  }
}
