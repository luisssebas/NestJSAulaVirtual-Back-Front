import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './profesor.dto';

@Controller('profesor')
export class ProfesorController {

    private logger = new Logger('ProfesorController');

    constructor(private profesorService: ProfesorService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Profesor/index')
    async showAllCursos(){
        const  profesores = await this.profesorService.showAll();
        return {profesores};
    }

    @Post('create')
    @Render('Profesor/create')
    createCurso(@Body() data: ProfesorDTO){
        this.logger.log(JSON.stringify(data));
        return this.profesorService.create(data);
    }

    @Get('data/:id')
    readCurso(@Param('id') id: number){
        return this.profesorService.read(id);
    }

    @Put('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<ProfesorDTO>){
        this.logger.log(JSON.stringify(data));
        return this.profesorService.update(id, data);
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.profesorService.destroy(id);
    }
}
