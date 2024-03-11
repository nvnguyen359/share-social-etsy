import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageShareComponent } from './manage-share.component';

const routes: Routes = [{ path: '', component: ManageShareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageShareRoutingModule { }
