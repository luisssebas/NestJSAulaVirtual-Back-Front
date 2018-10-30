import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
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

    @OneToMany(type => ProfesorEntity, profesor => profesor.nombreProfesor)
    @JoinColumn()
    profesor: ProfesorEntity;

    @OneToMany(type => EstudianteEntity, estudiante => estudiante.nombreEstudiante)
    @JoinColumn()
    estudiante: EstudianteEntity;

    @OneToMany(type => MateriaEntity, materia => materia.nombreMateria)
    @JoinColumn()
    materia: MateriaEntity;
}