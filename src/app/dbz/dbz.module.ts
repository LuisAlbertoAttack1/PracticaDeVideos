import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    PersonasComponent
    //Buscar la definicion
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    //se tiene que agregar la parte de - > FormsModule
    CommonModule,
    FormsModule
  ]
})
//Esto se manda a traer
export class DbzModule { }
