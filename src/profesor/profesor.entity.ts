import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Entity('Profesor')
export class ProfesorEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreProfesor: string;

    @Column('text') apellidoProfesor: string;

    @Column('text') direccionProfesor: string;

    @Column('text') emailProfesor: string;

    @OneToMany(type => CursoEntity, curso => curso.nombreCurso)
    @JoinColumn()
    curso: CursoEntity;
}