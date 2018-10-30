import { CursoEntity } from "curso/curso.entity";

export interface EstudianteDTO{
    nombreEstudiante : string;
    apellidoEstudiante : string;
    direccionEstudiante : string;
    emailEstudiante : string;
    curso : CursoEntity;
}