import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/feature1',
        pathMatch: 'full'
      }, {
        path: 'feature1',
        loadChildren: './feature1/feature1.module#Feature1Module'
      }, {
        path: 'feature2',
        loadChildren: './feature2/feature2.module#Feature2Module'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

