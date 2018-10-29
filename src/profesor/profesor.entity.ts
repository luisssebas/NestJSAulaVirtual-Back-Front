import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Profesor')
export class ProfesorEntity{
    @PrimaryGeneratedColumn('uuid') idProfesor: number;

    @Column('text') nombreProfesor: string;

    @Column('text') apellidoProfesor: string;

    @Column('text') direccionProfesor: string;

    @Column('text') emailProfesor: string;

    @OneToOne(type => CursoEntity)
    @JoinColumn()
    curso: CursoEntity;
}