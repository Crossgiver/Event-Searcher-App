import { NgModule, ModuleWithProviders }      from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

import {

} from "./pipes";

import {

} from './services';

import {

} from './directives';

import {
  NavbarComponent
} from './components';


import {

} from './validators';

const NGA_COMPONENTS = [
  NavbarComponent
];

const NGA_PIPES = [

];

const NGA_DIRECTIVES = [

];

const NGA_SERVICES = [

];

const NGA_VALIDATORS = [

];

@NgModule({
  declarations: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
    ...NGA_PIPES,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ...NGA_COMPONENTS,
    ...NGA_DIRECTIVES,
    ...NGA_PIPES,
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        ...NGA_VALIDATORS,
        ...NGA_SERVICES,
      ],
    };
  }
}
