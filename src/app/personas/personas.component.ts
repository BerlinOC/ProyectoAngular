import { Component, OnInit, Input } from '@angular/core';
import { persona } from './personas.model';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input() dato1: persona;
  @Input() dato2: number;
  ngOnInit(): void {
  }
}
