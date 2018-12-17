import { ProfesorEntity } from "profesor/profesor.entity";
import { EstudianteEntity } from "estudiante/estudiante.entity";
import { MateriaEntity } from "materia/materia.entity";

export interface TareaDTO{
    idTarea: number;

    nombreTarea: string;

    descripcionTarea: string;

    notaTarea: number;

    estadoTarea: string;

    fechaInicioTarea: Date;

    fechaFinTarea: Date;

    profesores: ProfesorEntity;

    estudiantes: EstudianteEntity;

    materias: MateriaEntity;
}