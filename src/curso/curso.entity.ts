import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { type } from 'os';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { MateriaEntity } from 'materia/materia.entity';
import { ProfesorEntity } from 'profesor/profesor.entity';

@Entity('Curso')
export class CursoEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreCurso: string;

    @OneToMany(type => EstudianteEntity, estudiante => estudiante.nombreEstudiante)
    estudiantes: EstudianteEntity[];

    @OneToMany(type => ProfesorEntity, profesor => profesor.nombreProfesor)
    profesores: ProfesorEntity[];

    @OneToMany(type => MateriaEntity, materia => materia.nombreMateria)
    materias: ProfesorEntity[];
}