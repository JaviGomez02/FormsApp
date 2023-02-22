import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';



const routes: Routes = [
  {
    path: 'basicos',
    component: BasicosComponent
  },
  {
    path: 'dinamicos',
    component: DinamicosComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'switches',
    component: SwitchesComponent
  },
  {
    path: '',
    redirectTo: 'basicos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
