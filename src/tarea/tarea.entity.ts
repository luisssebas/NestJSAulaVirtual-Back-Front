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

    @Column('text') estadoTarea: string;

    @Column('text') TrimestreTarea: number;

    @CreateDateColumn() fechaInicioTarea: Date;

    @CreateDateColumn() fechaFinTarea: Date;

    @ManyToOne(type => ProfesorEntity, profesores => profesores.tareas)
    @JoinColumn()
    profesores: ProfesorEntity;

    @ManyToOne(type => EstudianteEntity, estudiantes => estudiantes.tareas)
    @JoinColumn()
    estudiantes: EstudianteEntity;

    @ManyToOne(type => MateriaEntity, materias => materias.tareas)
    @JoinColumn()
    materias: MateriaEntity;

    
}