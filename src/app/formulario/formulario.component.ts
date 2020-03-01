import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { persona } from '../personas/personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() variable = new EventEmitter<persona>();
  dato1: string;
  @ViewChild('apellido2') ap2: ElementRef;


  constructor() { }

  ngOnInit(): void {  
  }
  agregar(apellido: HTMLInputElement) {
    let personita: persona = new persona(this.dato1, apellido.value, this.ap2.nativeElement.value);
    this.variable.emit(personita);
  }
}
