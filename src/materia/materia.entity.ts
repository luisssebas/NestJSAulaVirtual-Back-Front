import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Materia')
export class MateriaEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreMateria: string;

    @Column('int') horasMateria: number;

    @ManyToOne(type => CursoEntity, cursos => cursos.nombreCurso)
    @JoinColumn()
    cursos: CursoEntity;
}