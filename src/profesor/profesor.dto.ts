import { CursoEntity } from "curso/curso.entity";

export interface ProfesorDTO{
    id: number;

    nombreProfesor: string;

    apellidoProfesor: string;

    direccionProfesor: string;

    emailProfesor: string;

    curso: CursoEntity;
}