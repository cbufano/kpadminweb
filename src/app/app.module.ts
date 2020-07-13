import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensalistaFormComponent } from './mensalistas/mensalista-form/mensalista-form.component';
import { MensalistaMenuComponent } from './mensalistas/mensalista-menu/mensalista-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MensalistaFormComponent,
    MensalistaMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
