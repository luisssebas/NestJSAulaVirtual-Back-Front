import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { TareaEntity } from 'tarea/tarea.entity';

@Entity('Estudiante')
export class EstudianteEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreEstudiante: string;

    @Column('text') apellidoEstudiante: string;

    @Column('text') direccionEstudiante: string;

    @Column('text') emailEstudiante: string;

    @OneToMany(type => CursoEntity, curso => curso.nombreCurso)
    @JoinColumn()
    curso: CursoEntity;

    @ManyToMany(type => TareaEntity, tareas => tareas.nombreTarea)
    @JoinColumn()
    tareas: TareaEntity;
}