import { Controller, Delete, Put, Get, Post } from '@nestjs/common';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {

    constructor(private tareaService: TareaService){}

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
