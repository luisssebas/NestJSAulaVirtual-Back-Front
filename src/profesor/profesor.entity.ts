import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { TareaEntity } from 'tarea/tarea.entity';

@Entity('Profesor')
export class ProfesorEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreProfesor: string;

    @Column('text') apellidoProfesor: string;

    @Column('text') direccionProfesor: string;

    @Column('text') emailProfesor: string;

    @ManyToOne(type => CursoEntity, cursos => cursos.profesores)
    @JoinColumn()
    cursos: CursoEntity;

    @OneToMany(type => TareaEntity, tareas => tareas.profesores)
    tareas: TareaEntity[];
}