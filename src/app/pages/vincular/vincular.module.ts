import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VincularRoutingModule } from './vincular-routing.module';
import { VincularComponent } from './vincular.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VincularComponent],
  imports: [
    CommonModule,
    VincularRoutingModule,
    FormsModule
  ]
})
export class VincularModule { }
