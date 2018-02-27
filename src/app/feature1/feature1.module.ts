import { NgModule } from '@angular/core';
import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsKeybindingsComponent } from './components/settings/settings-keybindings/settings-keybindings.component';
import { SettingsGraphicsComponent } from './components/settings/settings-graphics/settings-graphics.component';
import { SettingsGameComponent } from './components/settings/settings-game/settings-game.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { Feature1SharedModule } from './shared/shared.module';
import { Feature1NavComponent } from './components/feature1-nav/feature1-nav.component';

@NgModule({
  imports: [
    Feature1RoutingModule,
    Feature1SharedModule.forRoot()
  ],
  declarations: [Feature1Component, SettingsComponent, SettingsKeybindingsComponent, SettingsGraphicsComponent, SettingsGameComponent,
    ProductsComponent, AddProductComponent, ProductFilterComponent, Feature1NavComponent]
})
export class Feature1Module {
}
