import { ProfesorEntity } from "profesor/profesor.entity";
import { EstudianteEntity } from "estudiante/estudiante.entity";
import { MateriaEntity } from "materia/materia.entity";

export interface TareaDTO{
    idTarea: number;

    nombreTarea: string;

    descripcionTarea: string;

    notaTarea: number;

    estadoTarea: boolean;

    fechaInicioTarea: Date;

    fechaFinTarea: Date;

    profesor: ProfesorEntity;

    estudiante: EstudianteEntity;

    materia: MateriaEntity;
}