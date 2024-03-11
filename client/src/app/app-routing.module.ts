import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApiUrl } from "./genetal";

const routes: Routes = [
  {
    path: ApiUrl.Socials,
    loadChildren: () =>
      import("./pages/socials/socials.module").then((m) => m.SocialsModule),
  },
  {
    path: ApiUrl.Share,
    loadChildren: () =>
      import("./pages/share/share.module").then((m) => m.ShareModule),
  },
  {
    path: ApiUrl.ReportShare,
    loadChildren: () =>
      import("./pages/manage-share/manage-share.module").then(
        (m) => m.ManageShareModule
      ),
  },
  {
    path: ApiUrl.Home,
    loadChildren: () =>
      import("./pages/report/report.module").then((m) => m.ReportModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/report/report.module").then((m) => m.ReportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
