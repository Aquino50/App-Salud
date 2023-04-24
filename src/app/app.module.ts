import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';
import { FooterModule } from "./components/footer/footer.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';

import 'animate.css'


@NgModule({
    declarations: [
        AppComponent,
        LayoutBaseComponent,
        LayoutLandingComponent,
        SidebarComponent,
       
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FormsModule,
        FooterModule, 
       
        

    ],

    providers: [],

    bootstrap: [AppComponent],
})
export class AppModule { }
