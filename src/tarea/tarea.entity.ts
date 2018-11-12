import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';
import { ProfesorEntity } from 'profesor/profesor.entity';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { MateriaEntity } from 'materia/materia.entity';

@Entity('Tarea')
export class TareaEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column('text') nombreTarea: string;

    @Column('text') descripcionTarea: string;

    @Column('decimal') notaTarea: number;

    @Column('text') estadoTarea: boolean;

    @CreateDateColumn() fechaInicioTarea: Date;

    @CreateDateColumn() fechaFinTarea: Date;

    @ManyToOne(type => ProfesorEntity, profesor => profesor.nombreProfesor)
    @JoinColumn()
    profesor: ProfesorEntity;

    @ManyToOne(type => EstudianteEntity, estudiantes => estudiantes.nombreEstudiante)
    @JoinColumn()
    estudiante: EstudianteEntity;

    @ManyToOne(type => MateriaEntity, materia => materia.nombreMateria)
    @JoinColumn()
    materia: MateriaEntity;
}