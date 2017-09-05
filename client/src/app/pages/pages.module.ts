import {PagesRoutingModule} from './pages.routing.module';
import {PagesComponent} from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgaModule} from './../common/nga.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgaModule.forRoot()
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
