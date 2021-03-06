import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Feature1Component,
        children: [
          {
            path: 'subfeature1',
            loadChildren: './subfeature1/subfeature1.module#Subfeature1Module'
          }, {
            path: 'subfeature2',
            loadChildren: './subfeature2/subfeature2.module#Subfeature2Module'
          }, {
            path: 'settings',
            component: SettingsComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  schemas: []
})
export class Feature1RoutingModule {
}

