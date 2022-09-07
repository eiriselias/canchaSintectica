import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProgramacionComponent,
    PosicionesComponent,
    GoleadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
