import { Controller, Get, Post, Put, Delete, Render, Logger, Body, Param } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDTO } from './curso.dto';

@Controller('curso')
export class CursoController {
    private logger = new Logger('CursoController');

    constructor(private cursoService: CursoService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Curso/index')
    async showAllCursos(){
        const  cursos = await this.cursoService.showAll();
        return {cursos};
    }

    @Post('create')
    @Render('Curso/create')
    createCurso(@Body() data: CursoDTO){
        this.logger.log(JSON.stringify(data));
        return this.cursoService.create(data);
    }

    @Get('data/:id')
    readCurso(@Param('id') id: number){
        return this.cursoService.read(id);
    }

    @Put('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<CursoDTO>){
        this.logger.log(JSON.stringify(data));
        return this.cursoService.update(id, data);
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.cursoService.destroy(id);
    }
}