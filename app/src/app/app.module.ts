import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { StateComponent } from './state/state.component';
import { StatesComponent as StateListComponent } from './states/states/states.component';
import { PersonsComponent } from './states/persons/persons.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateListComponent,
    StatesComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
