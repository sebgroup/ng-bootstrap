import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import {SharedModule} from "../shared/shared.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbDropdownModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
