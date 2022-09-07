import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';

const routes: Routes = [
  {path:"", component:ProgramacionComponent},
  {path:"programacion",component:ProgramacionComponent},
  {path:"posiciones",component:PosicionesComponent},
  {path:"goleadores", component:GoleadoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
