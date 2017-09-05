import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: '', loadChildren: './private/private.module#PrivateModule' },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
