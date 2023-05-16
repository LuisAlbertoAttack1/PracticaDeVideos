import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  //aremos una diferencia de un componente por que este es un modelo
  //que se creo con el comando - > ng g m dbz y solo para ver una diferencia
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
//no se donde lo manda a traer el de Personaje  
  public personajes : Personaje [] = [
    {nombre : "goku", poder : 20000}
  ];
//esto es de la interface Personaje
  public obtenNuevoPersonaje(persona : Personaje) : void {
    console.log(persona);
    this.personajes.push(persona);
  }

}

  


