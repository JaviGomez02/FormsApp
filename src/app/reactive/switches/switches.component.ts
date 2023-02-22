import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup=this.fb.group({
    genero: ["F", Validators.required],
    notificaciones: [true],
    terminos: [false, Validators.requiredTrue]
  })

  persona={
    genero: 'F',
    notificaciones: true
  }


  ngOnInit(): void {
    this.myForm.valueChanges
    .subscribe(({terminos, ...rest})=>{
      this.persona=rest
    })
  }

  save(){

  }

}
