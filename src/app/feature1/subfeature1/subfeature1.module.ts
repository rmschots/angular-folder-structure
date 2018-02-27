import { NgModule } from '@angular/core';
import { Subfeature1Component } from './subfeature1.component';
import { Feature1SharedModule } from '../shared/shared.module';
import { Subfeature1RoutingModule } from './subfeature1-routing.module';

@NgModule({
  imports: [
    Subfeature1RoutingModule,
    Feature1SharedModule
  ],
  declarations: [Subfeature1Component]
})
export class Subfeature1Module {
}
