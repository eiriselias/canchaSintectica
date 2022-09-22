import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';

const routes: Routes = [
  {path:"", component:ProgramacionComponent, pathMatch:'full'},
  {path:"programacion",component:ProgramacionComponent},
  {path:"posiciones",component:PosicionesComponent},
  {path:"goleadores", component:GoleadoresComponent},
  {path:"disponibilidad", component:DisponibilidadComponent},
  {path:"crearEquipo", component:CrearEquipoComponent},
  {path:"**", redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
