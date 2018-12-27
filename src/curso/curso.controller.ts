import { Controller, Get, Post, Render, Logger, Body, Param, Res, Req, UseGuards} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDTO } from './curso.dto';
import { AuthGuard } from 'shared/auth.guard';

@Controller('curso')
export class CursoController {
    private logger = new Logger('CursoController');

    constructor(private cursoService: CursoService){}

    @Get('index')
    @UseGuards(new AuthGuard())
    @Render('Curso/index')
    async showAllCursos(){
        const  cursos = await this.cursoService.showAll();
        //this.logger.log(JSON.stringify(num));
        var count = Object.keys(cursos).length;
        console.log(count);
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

    //Update POST

    @Post('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<CursoDTO>, @Req() req, @Res() res){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        this.cursoService.update(id, data);
        res.redirect('index'); 
    }

    //Delete POST

    @Post('delete/:id')
    destroyCurso(@Param('id') id:number, @Req() req, @Res() res){
        req.query.method == 'delete';
        this.cursoService.destroy(id);
        res.redirect('/Curso/index');
    }
}