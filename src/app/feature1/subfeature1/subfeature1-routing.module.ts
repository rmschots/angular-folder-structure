import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subfeature1Component } from './subfeature1.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Subfeature1Component
      }
    ])
  ],
  exports: [RouterModule],
  schemas: []
})
export class Subfeature1RoutingModule {
}

