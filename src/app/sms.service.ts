import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SMSService {

  constructor() { }

  sendMessage(){
    return "send Message";
  }
}
