import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupModule } from './login-signup/login-signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ManageIconsModule } from './manage-icons/manage-icons.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { SrpIconsComponent } from './srp-icons/srp-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SrpIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginSignupModule,
    DashboardModule,
    ManageIconsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
