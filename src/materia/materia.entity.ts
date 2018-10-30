import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Materia')
export class MateriaEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreMateria: string;

    @Column('int') horasMateria: number;

    @OneToOne(type => CursoEntity)
    @JoinColumn()
    curso: CursoEntity;
}