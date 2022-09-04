import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionComponent } from './components/programacion/programacion.component';

const routes: Routes = [
 
  {path:"programacion",component:ProgramacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
