import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  constructor() { }  
  
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  query:string=""

  @ViewChild('myForm') myForm!: NgForm

  ngOnInit(): void {
  }


  notValidNombre():boolean{

    return this.myForm?.controls['nombre']?.invalid && this.myForm?.controls['nombre']?.touched
  }

  save() {
  }

  delete(i:number){
    this.persona.favoritos.splice(i, 1)
  }

  agregar(){

    if(this.query!=""){
      let nuevoFavorito:Favorito = {
        id: this.persona.favoritos.length+1,
        nombre: this.query
      }
      this.persona.favoritos.push({...nuevoFavorito})
  
      this.query=""
    }
    
  }
}
