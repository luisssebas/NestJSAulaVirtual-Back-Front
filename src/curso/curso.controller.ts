import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';

@Controller('curso')
export class CursoController {
    
    constructor(private cursoService: CursoService){}

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