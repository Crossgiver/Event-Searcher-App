import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgaModule} from './../../common/nga.module';
import {PublicComponent} from "./public.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {PublicRoutingModule} from "./public.routing.module";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule.forRoot()
  ],
  declarations: [PublicComponent, LoginComponent, RegisterComponent]
})
export class PublicModule { }
