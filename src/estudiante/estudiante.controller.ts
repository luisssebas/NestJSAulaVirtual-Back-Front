import { Controller, Put, Delete, Get, Post, Logger, Render, Body, Param } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDTO } from './estudiante.dto';

@Controller('estudiante')
export class EstudianteController {

    private logger = new Logger('EstudianteController');

    constructor(private estudianteService: EstudianteService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Estudiante/index')
    async showAllCursos(){
        const  estudiantes = await this.estudianteService.showAll();
        return {estudiantes};
    }

    @Post('create')
    @Render('Estudiante/create')
    createCurso(@Body() data: EstudianteDTO){
        this.logger.log(JSON.stringify(data));
        return this.estudianteService.create(data);
    }

    @Get('data/:id')
    readCurso(@Param('id') id: number){
        return this.estudianteService.read(id);
    }

    @Put('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<EstudianteDTO>){
        this.logger.log(JSON.stringify(data));
        return this.estudianteService.update(id, data);
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.estudianteService.destroy(id);
    }
}
