import { Component, OnInit } from '@angular/core';

interface PersonaSwitches{
  genero: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  constructor() {}

  persona:PersonaSwitches={
    genero:"",
    notificaciones:true
  }

  terminos:boolean=false

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.persona)
  }

}
