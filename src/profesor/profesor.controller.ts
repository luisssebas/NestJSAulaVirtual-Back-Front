import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDTO } from './profesor.dto';
import { CursoService } from 'curso/curso.service';

@Controller('profesor')
export class ProfesorController {

    private logger = new Logger('ProfesorController');

    constructor(private profesorService: ProfesorService, private cursoService: CursoService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Profesor/index')
    async showAllProfesores(){
        const  profesores = await this.profesorService.showAll();
        return {profesores};
    }

    //Create GET

    @Get('create')    
    @Render('Profesor/create')
    async showProfesores(){
        const  profesores = await this.profesorService.showAll();
        const cursos = await this.cursoService.showAll();
        return {profesores,cursos};
    }

    //Create POST

    @Post('create')
    createProfesor(@Body() data: ProfesorDTO, @Res() res){
        this.logger.log(JSON.stringify(data));
        this.profesorService.create(data);
        res.redirect('index');  
    }

    //Update GET

    @Get('update/:id')
    @Render('Profesor/update')
    async readProfesor(@Param('id') id: number){
        const cursos = await this.cursoService.showAll();
        const profesores = await this.profesorService.read(id);
        return {profesores,cursos};
    }

    //Update POST

    @Put('update/:id')
    updateProfesor(@Param('id') id: number, @Body() data: Partial<ProfesorDTO>, @Req() req, @Res() res){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        this.profesorService.update(id, data);
        res.redirect('index');
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number, @Req() req, @Res() res){
        req.query.method == 'delete';
        this.profesorService.destroy(id);
        res.redirect('index');
    }
}
