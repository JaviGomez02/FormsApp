import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ],
  exports: [
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent
  ]
})
export class TemplateModule { }
