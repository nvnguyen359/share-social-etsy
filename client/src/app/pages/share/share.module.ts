import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { DynamicTableComponent } from 'src/app/components/dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [
    ShareComponent,
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,DynamicTableComponent
  ]
})
export class ShareModule { }
