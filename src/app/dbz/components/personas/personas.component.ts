import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-dbz-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
//Personaje en este proyecto es una import de un componente
  public personajeAdd : Personaje [] = [
    //este lo mandamos a traer al - > personas.component.html
    { nombre : '', poder : 0 }
  ];
//Como crear una variable event emiter desde una interface - > Personaje es de la interface
@Output()
//que significa el Output
  public nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  //metodo para que muestre la funcionalidad del booton
  public emitPersonaje() :void {
/*     console.log(this.personajeAdd); */
this.nuevoPersonaje.emit(this.personajeAdd[0]);
    
  }
}
