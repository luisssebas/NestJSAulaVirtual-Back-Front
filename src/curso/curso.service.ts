import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoEntity } from './curso.entity';
import { Repository } from 'typeorm';
import { CursoDTO } from './curso.dto';

@Injectable()
export class CursoService {
    
    constructor(@InjectRepository(CursoEntity) 
    private cursoRepository: Repository<CursoEntity>
    ){}

    async showAll(){
        return await this.cursoRepository.find();
    }

    async create(data){
        const curso = await this.cursoRepository.create(data);
        await this.cursoRepository.save(curso);
        return curso;
    }

    async read(id: number){
        const curso = await this.cursoRepository.findOne({where: {id}});
        if(!curso){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        return curso;
    }

    async update(id: number, data: Partial<CursoDTO>){
        let curso = await this.cursoRepository.findOne({where: {id}});
        if(!curso){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.cursoRepository.update({id}, data);
        curso = await this.cursoRepository.findOne({where: {id}});
        return curso;
    }

    async destroy(id: number){
        const curso = await this.cursoRepository.findOne({where: {id}});
        if(!curso){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.cursoRepository.delete({id});
        return curso;
    }
    
}
