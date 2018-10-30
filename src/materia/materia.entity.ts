import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Materia')
export class MateriaEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreMateria: string;

    @Column('int') horasMateria: number;

    @OneToMany(type => CursoEntity, curso => curso.nombreCurso)
    @JoinColumn()
    curso: CursoEntity;
}