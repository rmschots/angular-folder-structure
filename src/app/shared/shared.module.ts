import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent1Component } from './components/reusable-component1/reusable-component1.component';
import { ReusableComponent2Component } from './components/reusable-component2/reusable-component2.component';
import { GlobalServiceService } from './services/global-service.service';
import { RouterModule } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { InputFieldComponent } from './components/input-field/input-field.component';

const COMPONENTS = [
  ReusableComponent1Component,
  ReusableComponent2Component,
  InputFieldComponent
];

const SERVICES = [
  GlobalServiceService
];

const GUARDS = [];

const PIPES = [
];


const MODULES = [
  CommonModule,
  RouterModule,
  AngularSplitModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    InputFieldComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...SERVICES, ...GUARDS]
    };
  }
}
