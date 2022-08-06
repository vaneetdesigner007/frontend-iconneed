import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';


@NgModule({
  declarations: [
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule
  ]
})
export class LoginSignupModule { }
