import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { FormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios.component';
import 'animate.css'



@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    
    
  ]
})
export class ServiciosModule { }
