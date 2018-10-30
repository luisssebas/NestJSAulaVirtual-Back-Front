import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Profesor')
export class ProfesorEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreProfesor: string;

    @Column('text') apellidoProfesor: string;

    @Column('text') direccionProfesor: string;

    @Column('text') emailProfesor: string;

    @ManyToOne(type => CursoEntity, curso => curso.nombreCurso)
    @JoinColumn()
    curso: CursoEntity;
}