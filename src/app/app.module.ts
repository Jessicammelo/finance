import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteInputComponent } from './features/teste/teste-input/teste-input.component';
import { TesteComponent } from './features/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TesteInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
