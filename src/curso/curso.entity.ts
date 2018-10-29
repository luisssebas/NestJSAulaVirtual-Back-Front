import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Curso')
export class CursoEntity{
    @PrimaryGeneratedColumn('uuid') idCurso: number;

    @Column('text') nombreCurso: string;
}