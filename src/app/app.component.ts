import { Component } from '@angular/core';
import { persona } from './personas/personas.model';


@Component({
  selector: 'app-root',
  // tmb puede ser template: '[etiquetas html]'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// instalar bootstrap npm install bootstrap --save
export class AppComponent {
  title = 'firstapp';

  nombre = 'hola';
  private apellido = 'hola1a';
  accion = false;
  personas: persona[] = [new persona('jairo', 'alexis', 'castro')];

  titulo = 'as';
  constructor() {
    setTimeout(
      () => { this.accion = true;
      },
      3000);

  }

  get(): string {
    return this.apellido;
  }
  mensaje(event: Event) {
    this.titulo = (<HTMLInputElement>event.target ).value;
  }
  mandar(per: persona){
    this.personas.push(per);
  }

}
