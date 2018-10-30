import { Controller, Delete, Put, Get, Post } from '@nestjs/common';
import { MateriaService } from './materia.service';

@Controller('materia')
export class MateriaController {

    constructor(private materiaService: MateriaService){}

    @Get()
    showAllCursos(){

    }

    @Post()
    createCurso(){
        
    }

    @Get(':id')
    readCurso(){

    }

    @Put(':id')
    updateCurso(){

    }

    @Delete(':id')
    destroyCurso(){

    }
}
