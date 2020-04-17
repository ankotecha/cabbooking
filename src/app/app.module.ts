import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewrideComponent } from './viewride/viewride.component';
import {ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { AdminrideComponent } from './adminride/adminride.component';
import { AdminComponent } from './admin/admin.component';
import { RouteAddComponent } from './route-add/route-add.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    UserComponent,
    BookingComponent,
    PaymentComponent,
    HomeComponent,
    ConfirmComponent,
    LogoutComponent,
    ViewrideComponent,
    MapComponent,
    AdminrideComponent,
    AdminComponent,
    RouteAddComponent,
    UserAddComponent,
    UserEditComponent,
    UserGetComponent,
    AboutComponent
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
