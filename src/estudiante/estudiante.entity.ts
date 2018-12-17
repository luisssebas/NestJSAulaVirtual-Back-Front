import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { TareaEntity } from 'tarea/tarea.entity';

@Entity('Estudiante')
export class EstudianteEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreEstudiante: string;

    @Column('text') apellidoEstudiante: string;

    @Column('text') direccionEstudiante: string;

    @Column('text') emailEstudiante: string;

    @ManyToOne(type => CursoEntity, cursos => cursos.estudiantes)
    @JoinColumn()
    cursos: CursoEntity;

    @OneToMany(type => TareaEntity, tareas => tareas.estudiantes)
    tareas: TareaEntity[];
}