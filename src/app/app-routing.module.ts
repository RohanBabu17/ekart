import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchText',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'user',component:UserComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
