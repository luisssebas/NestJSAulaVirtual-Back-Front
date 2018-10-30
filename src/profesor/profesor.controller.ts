import { Controller, Delete, Put, Get, Post } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesor')
export class ProfesorController {

    constructor(private profesorService: ProfesorService){}

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
