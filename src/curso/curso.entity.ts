import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Curso')
export class CursoEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreCurso: string;
}