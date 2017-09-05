import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuardService} from './../../common/services';
import {PrivateComponent} from "./private.component";

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      { path: 'home', canActivate: [AuthGuardService], pathMatch: 'full', component: HomeComponent },
      { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class PrivateRoutingModule { }
