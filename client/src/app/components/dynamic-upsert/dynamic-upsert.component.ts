import { Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-dynamic-upsert",
  templateUrl: "./dynamic-upsert.component.html",
  styleUrls: ["./dynamic-upsert.component.scss"],
})
export class DynamicUpsertComponent {
  form: any;
  removeAts: any[] = [];
  infor = "Thêm Khách Hàng Mới";
  fieldsShow: any;
  fieldsHidden: any;
  itemsDelete: any = [];
  products: any = [];
  units: any = [];
  url = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router,
    private service: ApiService
  ) {}
  ngOnInit() {

    this.url = this.data.url
      ? this.data.url
      : this.router.url.replace("/", "").trim();
  }
  scrollTop() {
    setTimeout(() => {
      var element = document.getElementById("scrollTop");
      if (element) {
        // window.scrollTo(0, 0);
        element.scrollTo({ top: element.scrollHeight, behavior: "instant" });
      }
    }, 200);
  }
}
