import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';
import { Repository } from 'typeorm';
import { TareaDTO } from './tarea.dto';

@Injectable()
export class TareaService {

    constructor(@InjectRepository(TareaEntity) 
    private tareaRepository: Repository<TareaEntity>
    ){}

    async showAll(){
        return await this.tareaRepository.find();
    }

    async create(data){
        const tarea = await this.tareaRepository.create(data);
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
