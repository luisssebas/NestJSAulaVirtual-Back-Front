import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MateriaEntity } from './materia.entity';
import { MateriaDTO } from './materia.dto';

@Injectable()
export class MateriaService {

    constructor(@InjectRepository(MateriaEntity) 
    private materiaRepository: Repository<MateriaEntity>
    ){}

    async showAll(){
        return await this.materiaRepository.find();
    }

    async create(data){
        const materia = await this.materiaRepository.create(data);
        await this.materiaRepository.save(materia);
        return materia;
    }

    async read(id: number){
        const materia = await this.materiaRepository.findOne({where: {id}});
        if(!materia){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        return materia;
    }

    async update(id: number, data: Partial<MateriaDTO>){
        let materia = await this.materiaRepository.findOne({where: {id}});
        if(!materia){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.materiaRepository.update({id}, data);
        materia = await this.materiaRepository.findOne({where: {id}});
        return materia;
    }

    async destroy(id: number){
        const materia = await this.materiaRepository.findOne({where: {id}});
        if(!materia){
            throw new HttpException('Not foud', HttpStatus.NOT_FOUND);
        }
        await this.materiaRepository.delete({id});
        return materia;
    }
}
