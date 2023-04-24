import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLandingComponent } from './layout/layout-landing/layout-landing.component';

const routes: Routes = [
  {
    path: 'principal',
    component: LayoutLandingComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/principal/principal.module').then((m) => m.PrincipalModule),
      }
    ]
  },
  
  
  {
    path: 'revisar',
    component: LayoutLandingComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/revisar/revisar.module').then((m) => m.RevisarModule),
      }
    ]
  },
  {
    path: 'servicios',
    component: LayoutLandingComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/servicios/servicios.module').then((m) => m.ServiciosModule),
      }
    ]
  },
  {
    path: 'perfil',
    component: LayoutLandingComponent,
    //canActivate: [AutoGuard],}
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/perfil/perfil.module'). then((m)=> m.PerfilModule),
      }
    ]
  },
  {
    path:'vincular',
    component:LayoutLandingComponent,
    //canActivate: [AutoGuard],}
    children: [
      {
        path:'',
        loadChildren: ()=> import('./pages/vincular/vincular.module'). then((m)=> m.VincularModule),
      }
    ]
  },
  {
    path:'agendar',
    component:LayoutLandingComponent,
    //canActivate: [AutoGuard],}
    children: [
      {
        path:'',
        loadChildren: ()=> import('./pages/agendar/agendar.module'). then((m)=> m.AgendarModule),
      }
    ]
  },
  
  // NO REMOVE THIS COMMENT (ROUTING MODULE)
  {
    path: '**',
    redirectTo: 'principal',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
