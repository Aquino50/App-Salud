import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';
import { FooterModule } from "./components/footer/footer.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';

import 'animate.css';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'


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
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }), 
       
        

    ],

    providers: [],

    bootstrap: [AppComponent],
})
export class AppModule { }
