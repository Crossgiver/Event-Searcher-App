import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrivateRoutingModule} from "./private.routing.module";
import {NgaModule} from "../../common/nga.module";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuardService} from './../../common/services';
import {PrivateComponent} from './private.component';
import {Ng2MapModule} from "ng2-map";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrivateRoutingModule,
    NgaModule.forRoot(),
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAesgJEHM3fKiwfZ4-zE7_LVogPHp_Gz2w'})
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    PrivateComponent
  ],
  providers: [AuthGuardService]
})
export class PrivateModule { }
