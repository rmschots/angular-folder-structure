import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModuleSpecificService } from './services/module-specific.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  declarations: []
})
export class Feature1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Feature1SharedModule,
      providers: [ModuleSpecificService]
    };
  }
}
