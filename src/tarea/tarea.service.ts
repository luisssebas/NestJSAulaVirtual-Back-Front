import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';
import { Repository } from 'typeorm';
import { TareaDTO } from './tarea.dto';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { ProfesorEntity } from 'profesor/profesor.entity';
import { MateriaEntity } from 'materia/materia.entity';

@Injectable()
export class TareaService {

    constructor(@InjectRepository(TareaEntity) 
    private tareaRepository: Repository<TareaEntity>,
    @InjectRepository(MateriaEntity)
    private materiaRepository: Repository<MateriaEntity>,
    @InjectRepository(EstudianteEntity)
    private estudianteRepository: Repository<EstudianteEntity>,
    @InjectRepository(ProfesorEntity)
    private profesorRepository: Repository<ProfesorEntity>,
    ){}

    async showAll(){
        return await this.tareaRepository.find();
    }

    async create(data){
        const materia = await this.materiaRepository.findOne({where: {id: data.materias}});
        const estudiante = await this.estudianteRepository.findOne({where: {id: data.estudiantes}});
        const profesor = await this.profesorRepository.findOne({where: {id: data.profesores}});
        const tarea = await this.tareaRepository.create({...data, materias:materia, profesores:profesor, estudiantes:estudiante});
        await this.tareaRepository.save(tarea);
        return tarea;
    }

    async read(id: number){
        const tarea = await this.tareaRepository.findOne({where: {id}});
        if(!tarea){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        return tarea;
    }

    async update(id: number, data: Partial<TareaDTO>){
        let tarea = await this.tareaRepository.findOne({where: {id}});
        if(!tarea){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.tareaRepository.update({id}, data);
        tarea = await this.tareaRepository.findOne({where: {id}});
        return tarea;
    }

    async destroy(id: number){
        const tarea = await this.tareaRepository.findOne({where: {id}});
        if(!tarea){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.tareaRepository.delete({id});
        return tarea;
    }
}
