import { Controller, Put, Delete, Get, Post } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {

    constructor(private estudianteService: EstudianteService){}

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
