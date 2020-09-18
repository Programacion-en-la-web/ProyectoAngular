  
import { Component, OnInit, HostBinding } from '@angular/core';

import { PersonasService } from '../../services/personas.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css'],
})
export class PersonaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personas: any = [];

  constructor(private personaService: PersonasService) { }


  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(
        res => {
          this.personas = res;
        },
        err => console.error(err)
      );
  }

  deletePersona(id: string) {
    this.personaService.deletePersona(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPersonas();
        },
        err => console.error(err)
      )
  }

}