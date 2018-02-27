import { NgModule } from '@angular/core';
import { Subfeature2Component } from './subfeature2.component';
import { Feature1SharedModule } from '../shared/shared.module';
import { Subfeature2RoutingModule } from './subfeature2-routing.module';

@NgModule({
  imports: [
    Subfeature2RoutingModule,
    Feature1SharedModule
  ],
  declarations: [Subfeature2Component]
})
export class Subfeature2Module { }
