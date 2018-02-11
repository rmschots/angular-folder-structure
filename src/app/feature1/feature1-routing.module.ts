import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Feature1Component
      }
    ])
  ],
  exports: [RouterModule],
  schemas: []
})
export class Feature1RoutingModule {
}

