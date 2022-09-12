import { SMSDIService } from './smsdi.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationDIService {

  constructor(private SMSDIService:SMSDIService) {

   }

   showMessage(){
    return this.SMSDIService.sendMessage();
   }
}
