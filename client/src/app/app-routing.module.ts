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
  // {
  //   path: '',
  //   redirectTo: `/${ApiUrl.Dashboard}`, pathMatch: 'full'
  // },
  {
    path: ApiUrl.Listings,
    loadChildren: () =>
      import("./pages/listings/listings.module").then((m) => m.ListingsModule),
  },
  {
    path: ApiUrl.Schedule,
    loadChildren: () =>
      import("./pages/schedule/schedule.module").then((m) => m.ScheduleModule),
  },
  {
    path: ApiUrl.Dashboard,
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  { path: ApiUrl.Account, loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
