import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProgramacionComponent,
    PosicionesComponent,
    GoleadoresComponent,
    DisponibilidadComponent,
    CrearJugadorComponent,
    CrearEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
