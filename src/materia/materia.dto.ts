import { CursoEntity } from "curso/curso.entity";

export interface MateriaDTO{
    idMateria: number;
    nombreMateria: string;
    horasMateria: number;
    curso:CursoEntity;
}