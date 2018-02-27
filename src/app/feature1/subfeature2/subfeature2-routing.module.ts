import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subfeature2Component } from './subfeature2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Subfeature2Component
      }
    ])
  ],
  exports: [RouterModule],
  schemas: []
})
export class Subfeature2RoutingModule {
}

