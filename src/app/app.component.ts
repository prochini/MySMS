import { NotificationService } from './notification.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySMS';
  notificationService :NotificationService;
  constructor(){
    this.notificationService = new NotificationService();
  }
}
