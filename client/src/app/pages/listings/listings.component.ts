import { Component } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-listings",
  templateUrl: "./listings.component.html",
  styleUrls: ["./listings.component.scss"],
})
export class ListingsComponent {
  constructor(private service: ApiService) {}
  ngOnInit() {
    this.service.get("listings").then((res: any) => console.log(res));
  }
  onCreate() {}
}
