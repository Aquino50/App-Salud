import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendarRoutingModule } from './agendar-routing.module';
import { AgendarComponent } from './agendar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AgendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgendarRoutingModule
  ]
})
export class AgendarModule { }
