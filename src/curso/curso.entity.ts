import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { MateriaEntity } from 'materia/materia.entity';
import { ProfesorEntity } from 'profesor/profesor.entity';

@Entity('Curso')
export class CursoEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreCurso: string;

    @OneToMany(type => EstudianteEntity, estudiante => estudiante.cursos)
    estudiantes: EstudianteEntity[];

    @OneToMany(type => ProfesorEntity, profesores => profesores.nombreProfesor)
    profesor: ProfesorEntity[];

    @OneToMany(type => MateriaEntity, materias => materias.nombreMateria)
    materia: MateriaEntity[];
}