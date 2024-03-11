import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  title = 'client';
  constructor(private service:ApiService){

  }

  onClose() {
   
  }
  onCloseWindow() {
    this.service.eventWindow("close").then((e: any) => console.log(e));
  }
  onMinimize() {
    this.service.eventWindow("min").then((e: any) => console.log(e));
  }
  onMaximize() {
    this.service.eventWindow("max").then((e: any) => console.log(e));
  }
}
