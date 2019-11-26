import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExemplifyModule} from "angular-exemplify";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExemplifyModule
  ],
  exports: [
      ExemplifyModule
  ]
})
export class SharedModule { }
