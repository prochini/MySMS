import { NotificationDIService } from './notification-di.service';
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


  constructor(private NotificationDIService:NotificationDIService){
    this.notificationService = new NotificationService();
  }

  ngOnInit(){
    this.title = this.NotificationDIService.showMessage();
  }
}
