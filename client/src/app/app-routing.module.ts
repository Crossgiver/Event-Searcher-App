import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CookieService} from "angular2-cookie/core";

const routes: Routes = [
  { path: '', loadChildren: 'app/pages/pages.module#PagesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ CookieService ],
  declarations: []
})
export class AppRoutingModule { }
