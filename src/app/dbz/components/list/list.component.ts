import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  //se tiene que cambiar el selector por que es muy generico
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//Se crea un arreglo
@Input()
//Agrega un decorador y vemos su funcionalidad
  public personajeList : Personaje[] = [{
    nombre : "Vegeta",
    poder : 20000
  }];
}
