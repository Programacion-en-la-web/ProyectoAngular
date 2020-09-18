import { Component, OnInit, HostBinding } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

import { PersonasService } from 'src/app/services/personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  persona: Persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    idtipodocumento: 0,
    documento: 0,
    lugarresidencia: '',
    fechanacimiento: new Date(),
    email: '',
    telefono: 0,
    usuario: '',
    contraseña: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private personaService: PersonasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.personaService.getPersona(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.persona = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPersona() {
    delete this.persona.created_at;
    delete this.persona.id;
    this.personaService.savePersona(this.persona)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/personas']);
        },
        err => console.error(err)
      )
  }

  updatePersona() {
    delete this.persona.created_at;
    this.personaService.updatePersona(this.persona.id, this.persona)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/personas']);
        },
        err => console.error(err)
      )
  }

}