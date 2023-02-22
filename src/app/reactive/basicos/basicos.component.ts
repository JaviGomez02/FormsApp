import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Patatas'),
  //   precio: new FormControl(5),
  //   existencias: new FormControl(100)
  // })
  
  constructor(private fb: FormBuilder) { }


  myForm: FormGroup=this.fb.group({
    nombre:["Patatas", [Validators.required, Validators.minLength(3)]],
    precio: [3, [Validators.required, Validators.min(1)]],
    existencias: [20, [Validators.required, Validators.min(1)]]
  })

  notValidName(query:string): boolean{
    return this.myForm.controls[query].invalid
    && this.myForm.controls[query].touched
  }

  save(){
    if (this.myForm.invalid){ //Para que no se pueda mandar el formulario sin tocar los campos
      this.myForm.markAllAsTouched() 
      return
    }
    console.log(this.myForm.value)

    this.myForm.reset({ //Resetea el formulario y añade los valores que queramos
      nombre: 'azuca',
      existencias: 23
    })
  }
  ngOnInit() {
  }


}
