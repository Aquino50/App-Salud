import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ PerfilComponent ],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
