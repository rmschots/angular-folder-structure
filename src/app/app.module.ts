import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDropdownComponent } from './components/header/login-dropdown/login-dropdown.component';

const SINGLETON_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule.forRoot()
];

const CONTAINERS = [
  AppComponent,
  HeaderComponent,
  NavbarComponent,
  LoginDropdownComponent
];

@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  imports: [
    ...SINGLETON_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
