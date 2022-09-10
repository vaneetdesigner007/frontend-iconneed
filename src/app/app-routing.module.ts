import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(p => p.DashboardModule)},
  {path: 'login', loadChildren: () => import('./login-signup/login-signup.module').then(p => p.LoginSignupModule)},
  {path: 'icons', loadChildren: () => import('./manage-icons/manage-icons.module').then(p => p.ManageIconsModule)},
  // { path: '', loadChildren: () => import('./manage-icons/manage-icons.module').then(p => p.ManageIconsModule) },
  { path: 'search-icons', loadChildren: () => import('./srp-icons/srp-icons.component').then(p => p.SrpIconsComponent) },
	{path: '**', component:NotFoundComponent}	
];

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
