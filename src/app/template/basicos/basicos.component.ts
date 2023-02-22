import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm={
    producto: "salchichas",
    precio: 3,
    existencias: 5
  }

  constructor() { }

  ngOnInit(): void {

  }

  notValidName(query:string): boolean{
    return this.myForm?.controls[query]?.invalid &&
      this.myForm?.controls[query]?.touched
  }


  save() {

    // this.myForm.resetForm() Vacia todos los campos del formulario

    this.myForm.resetForm({
      producto: 'Por defecto',
      precio: 0,
      existencias: 0
    })

  }

}