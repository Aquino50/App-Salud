import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisarRoutingModule } from './revisar-routing.module';
import { RevisarComponent } from './revisar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RevisarComponent],
  imports: [
    CommonModule,
    RevisarRoutingModule,
    FormsModule
  ]
})
export class RevisarModule { }
