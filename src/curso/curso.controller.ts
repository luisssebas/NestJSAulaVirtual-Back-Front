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

    //Create GET

    @Get('create')    
    @Render('Curso/create')
    async showCursos(){
        const  cursos = await this.cursoService.showAll();
        return {cursos};
    }

    //Create POST

    @Post('create')
    createCurso(@Body() data: CursoDTO){
        this.logger.log(JSON.stringify(data));
        return this.cursoService.create(data);
    }

    //Update GET

    @Get('update/:id')    
    @Render('Curso/update')
    async readCurso(@Param('id') id: number){
        const cursos = await this.cursoService.read(id);
        return {cursos};
    }

    //Update POST

    @Post('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<CursoDTO>){
        this.logger.log(JSON.stringify(data));
        console.log(data);
        return this.cursoService.update(id, data);
    }

    //Delete POST

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.cursoService.destroy(id);
    }
}