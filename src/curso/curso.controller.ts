import { Controller, Get, Post, Put, Delete, Render, Logger, Body, Param, Res, Req } from '@nestjs/common';
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
    createCurso(@Body() data: CursoDTO, @Res() res){
        this.logger.log(JSON.stringify(data));
        this.cursoService.create(data)
        res.redirect('index');      
    }

    //Update GET

    @Get('update/:id')    
    @Render('Curso/update')
    async readCurso(@Param('id') id: number){
        const cursos = await this.cursoService.read(id);
        return {cursos};
    }

    //Update Post

    @Post('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<CursoDTO>, @Req() req){
        this.logger.log(JSON.stringify(data));
        console.log(data);
        req.query.method == 'update';
        return this.cursoService.update(id, data);
    }

    //Delete POST

    @Post('delete/:id')
    destroyCurso(@Param('id') id:number, @Req() req){
        console.log(id);        
        req.query.method == 'delete';
        return this.cursoService.destroy(id);
    }
}