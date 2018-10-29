import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Estudiante')
export class EstudianteEntity{
    @PrimaryGeneratedColumn('uuid') idEstudiante: number;

    @Column('text') nombreEstudiante: string;

    @Column('text') apellidoEstudiante: string;

    @Column('text') direccionEstudiante: string;

    @Column('text') emailEstudiante: string;

    @OneToOne(type => CursoEntity)
    @JoinColumn()
    curso: CursoEntity;
}