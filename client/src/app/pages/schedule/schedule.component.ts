import { Component } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent {
  constructor(private service:ApiService){}
  upsertListings() {
    this.service.get('schedule-listings').then((e:any)=>console.log(e))
  }
}
