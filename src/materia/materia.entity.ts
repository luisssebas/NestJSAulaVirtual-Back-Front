import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { TareaEntity } from 'tarea/tarea.entity';

@Entity('Materia')
export class MateriaEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreMateria: string;

    @Column('int') horasMateria: number;

    @ManyToOne(type => CursoEntity, cursos => cursos.materias)
    @JoinColumn()
    cursos: CursoEntity;

    @OneToMany(type => TareaEntity, tareas => tareas.materias)
    tareas: TareaEntity[];
}