import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewrideComponent } from './viewride/viewride.component';
import { AdminrideComponent } from './adminride/adminride.component';
import { RouteAddComponent } from './route-add/route-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'booking',component:BookingComponent},
{path:'payment',component:PaymentComponent},
{path:'confirm',component:ConfirmComponent},
{path:'about',component:AboutComponent},

{path:'logout',component:LogoutComponent},
{path:'viewride',component:ViewrideComponent},
{path:'allride',component:AdminrideComponent},
{path:'adminride',component:AdminrideComponent},

{path:'admin',component:AdminComponent},
{
  path: 'user/create',
  component: UserAddComponent
},
{
  path: 'admin/edit/:id',
  component: UserEditComponent
},
{
  path: 'users',
  component: UserGetComponent
},

{
  path:'admin/addroute',
  component:RouteAddComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
