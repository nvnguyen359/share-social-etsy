import { Component, NO_ERRORS_SCHEMA, ViewEncapsulation } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import links, { delay } from "src/app/genetal";
import { BrowserModule } from "@angular/platform-browser";
import { CdkMenuModule } from "@angular/cdk/menu";
import { MatRippleModule } from "@angular/material/core";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule,
    MatTableModule,
    BrowserModule,
    CdkMenuModule,
    MatRippleModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MenuComponent {
  links = links;
  constructor() {}
  async ngOnInit() {
    await delay(200);
    this.jsRun();
  }
  jsRun() {
    var btns = document.querySelectorAll(".menu  button");
    btns.forEach((btn, index) => {
      if (
        btn.textContent == "Tất Cả" ||
        localStorage.getItem("menu") == `${index}`
      ) {
        btn.classList.add("active");
      }
      if (btn) {
        btn.addEventListener("click", () => {
          let btns = document.querySelectorAll(".menu  button");
          btns.forEach((btn, index) => {
            btn.classList.remove("active");
          });
          btn.classList.add("active");
          localStorage.setItem("menu", `${index}`);
        });
      }
    });
  }
}
