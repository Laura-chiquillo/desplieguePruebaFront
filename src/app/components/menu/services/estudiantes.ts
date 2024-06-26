import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root' // Asegúrate de tener este providedIn en tu servicio
})

export class EstudiantesService {
  
  constructor(private http: HttpClient) { }
  

  private apiEstudiantes = 'https://app-proyecto-119c428c75f0.herokuapp.com/estudiantes';
  

    getEstudiantes(): Observable<Estudiante[]> {
        return this.http.get<any>(`${this.apiEstudiantes}`);
    }

    crearEstudiante(proyecto: Estudiante): Observable<Estudiante> {
        return this.http.post<Estudiante>(this.apiEstudiantes, proyecto);
    }

}