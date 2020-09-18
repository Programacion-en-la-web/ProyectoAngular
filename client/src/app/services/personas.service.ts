import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.API_URI}/personas`);
  }

  getPersona(id: string) {
    return this.http.get(`${this.API_URI}/personas/${id}`);
  }

  deletePersona(id: string) {
    return this.http.delete(`${this.API_URI}/personas/${id}`);
  }

  savePersona(persona: Persona) {
    return this.http.post(`${this.API_URI}/personas`, persona);
  }

  updatePersona(id: string|number, updatedPersona: Persona): Observable<Persona> {
    return this.http.put(`${this.API_URI}/personas/${id}`, updatedPersona);
  }

}