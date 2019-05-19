import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
project: object[] = [
  {"nombre" : "To-Do-List", "subtitulo" : "Mi primer To-Do-List con Angular", "imagen" : "assets/portfolio-1.jpg"},
  {"nombre" : "SuperHeroGenerator", "subtitulo" : "Generador de nombres de Superhéroe", "imagen" : "assets/portfolio-2.jpg"},
  {"nombre" : "Oddity", "subtitulo" : "Controlador de launches espaciales", "imagen" : "assets/portfolio-3.jpg"}
]
  constructor() { }
}
