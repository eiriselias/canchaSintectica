import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';

const routes: Routes = [
 
  {path:"programacion",component:ProgramacionComponent},
  {path:"posiciones",component:PosicionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
