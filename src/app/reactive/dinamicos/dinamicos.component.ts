import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

ngOnInit(): void {
    
}

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Suzuki', Validators.required],
      ['Yamaha', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)


  constructor(private fb: FormBuilder){}

  get favoritos(){
    return this.myForm.get('favoritos') as FormArray;
  }

  addFavorito(){
    if (!this.nuevoFavorito.invalid){
      this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    }
    this.nuevoFavorito.reset()
  
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }
  
  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.favoritos.clear();
    this.myForm.reset();
  }

  removeFavorito(i: number){
    this.favoritos.removeAt(i);
  }

}
