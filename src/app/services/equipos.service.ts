import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  equipos: Equipo[] = [];
  
  constructor() { }
}
