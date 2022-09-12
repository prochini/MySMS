import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SMSDIService {

  constructor() { }

  sendMessage(){
    return "send Message DI99999";
  }
}
