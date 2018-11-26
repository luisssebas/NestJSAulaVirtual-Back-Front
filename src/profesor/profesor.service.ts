import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity';
import { Repository } from 'typeorm';
import { ProfesorDTO } from './profesor.dto';
import { CursoEntity } from 'curso/curso.entity';

@Injectable()
export class ProfesorService {

    constructor(@InjectRepository(ProfesorEntity) 
    private profesorRepository: Repository<ProfesorEntity>,
    @InjectRepository(CursoEntity)
    private cursoRepository:Repository<CursoEntity>
    ){}

    async showAll(){
        return await this.profesorRepository.find();
    }

    async create(data){
        const curso = await this.cursoRepository.findOne({where: {id: data.cursos}});
        const profesor = await this.profesorRepository.create({...data, cursos: curso});
        await this.profesorRepository.save(profesor);
        return profesor;
    }

    async read(id: number){
        const profesor= await this.profesorRepository.findOne({where: {id}});
        if(!profesor){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        return profesor;
    }

    async update(id: number, data: Partial<ProfesorDTO>){
        let profesor = await this.profesorRepository.findOne({where: {id}});
        if(!profesor){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.profesorRepository.update({id}, data);
        profesor = await this.profesorRepository.findOne({where: {id}});
        return profesor;
    }

    async destroy(id: number){
        const profesor = await this.profesorRepository.findOne({where: {id}});
        if(!profesor){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.profesorRepository.delete({id});
        return profesor;
    }
}
