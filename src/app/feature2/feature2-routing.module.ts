import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Feature2Component
      }
    ])
  ],
  exports: [RouterModule],
  schemas: []
})
export class Feature2RoutingModule {
}
