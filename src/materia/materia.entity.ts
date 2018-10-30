import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Materia')
export class MateriaEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreMateria: string;

    @Column('int') horasMateria: number;

    @ManyToOne(type => CursoEntity, curso => curso.nombreCurso)
    @JoinColumn()
    curso: CursoEntity;
}