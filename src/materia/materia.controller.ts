import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaDTO } from './materia.dto';
import { CursoService } from 'curso/curso.service';

@Controller('materia')
export class MateriaController {

    private logger = new Logger('MateriaController');

    constructor(private materiaService: MateriaService, private cursoService: CursoService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Materia/index')
    async showAllMaterias(){
        const  materias = await this.materiaService.showAll();
        return {materias};
    }

    //Create GET

    @Get('create')    
    @Render('Materia/create')
    async showMaterias(){
        const  materias = await this.materiaService.showAll();
        return {materias};
    }

    //Create POST

    @Post('create')
    createMateria(@Body() data: MateriaDTO, @Res() res){
        this.logger.log(JSON.stringify(data));
        this.materiaService.create(data);
        res.redirect('index');
    }

    //Update GET

    @Get('update/:id')
    @Render('Materia/update')
    readMateria(@Param('id') id: number){
        const cursos = this.cursoService.showAll();
        const materias = this.materiaService.read(id);
        return {materias, cursos};
    }

    //Update POST

    @Post('update/:id')
    updateMateria(@Param('id') id: number, @Body() data: Partial<MateriaDTO>, @Req() req, @Res() res){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        this.materiaService.update(id, data);
        res.redirect('index');
    }

    @Delete('delete/:id')
    destroyMateria(@Param('id') id:number, @Req() req, @Res() res){
        req.query.method == 'delete';
        this.materiaService.destroy(id);
        res.redirect('index');
    }
}
