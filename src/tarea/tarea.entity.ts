import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { ProfesorEntity } from 'profesor/profesor.entity';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { MateriaEntity } from 'materia/materia.entity';

@Entity('Tarea')
export class TareaEntity{
    @PrimaryGeneratedColumn('uuid') id: number;

    @Column('text') nombreTarea: string;

    @Column('text') descripcionTarea: string;

    @Column('decimal') notaTarea: number;

    @Column('text') estadoTarea: boolean;

    @CreateDateColumn() fechaInicioTarea: Date;

    @CreateDateColumn() fechaFinTarea: Date;

    @OneToOne(type => ProfesorEntity)
    @JoinColumn()
    profesor: ProfesorEntity;

    @OneToOne(type => EstudianteEntity)
    @JoinColumn()
    estudiante: EstudianteEntity;

    @OneToOne(type => MateriaEntity)
    @JoinColumn()
    materia: MateriaEntity;
}