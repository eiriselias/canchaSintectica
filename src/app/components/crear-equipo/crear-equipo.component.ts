import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.scss']
})
export class CrearEquipoComponent implements OnInit {

  jugadorDate:any;
  jugadores:any;

  constructor(private JugadoreServi:JugadoresService) { }

  ngOnInit(): void {
    this.jugadorDate = new FormGroup({
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    equipo: new FormControl(""),
    edad: new FormControl(0),
    goles: new FormControl(0)
  })
    
  }

  guardarJugador(){
  }

}
