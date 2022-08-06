import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(p => p.DashboardModule)},
  {path: 'login', loadChildren: () => import('./login-signup/login-signup.module').then(p => p.LoginSignupModule)},
  {path: 'icons', loadChildren: () => import('./manage-icons/manage-icons.module').then(p => p.ManageIconsModule)},
	{path: '**', component:NotFoundComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
