import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageShareRoutingModule } from './manage-share-routing.module';
import { ManageShareComponent } from './manage-share.component';


@NgModule({
  declarations: [
    ManageShareComponent
  ],
  imports: [
    CommonModule,
    ManageShareRoutingModule
  ]
})
export class ManageShareModule { }
