import { Controller, Put, Delete, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDTO } from './estudiante.dto';
import { Curso } from 'curso/curso.decorator';

@Controller('estudiante')
export class EstudianteController {

    private logger = new Logger('EstudianteController');

    constructor(private estudianteService: EstudianteService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Estudiante/index')
    async showAllEstudiantes(){
        const  estudiantes = await this.estudianteService.showAll();
        return {estudiantes};
    }

    //Create GET

    @Get('create')    
    @Render('Estudiante/create')
    async showEstudiantes(){
        const  estudiantes = await this.estudianteService.showAll();
        return {estudiantes};
    }

    //Create POST

    @Post('create')
    createEstudiante(@Body() data: EstudianteDTO, @Res() res){
        this.logger.log(JSON.stringify(data));
        console.log(data);
        this.estudianteService.create(data);
        res.redirect('index');
    }

    //Update GET

    @Get('update/:id')
    @Render('Estudiante/update')
    async readEstudiante(@Param('id') id: number){
        const estTodo = await this.estudianteService.showAll();
        const estudiantes = await this.estudianteService.read(id);
        return {estudiantes};
    }

    //Update POST

    @Post('update/:id')
    updateEstudiante(@Param('id') id: number, @Body() data: Partial<EstudianteDTO>, @Req() req){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        return this.estudianteService.update(id, data);
    }

    //Delete POST

    @Delete('delete/:id')
    destroyEstudiante(@Param('id') id:number, @Req() req){
        req.query.method == 'delete';
        return this.estudianteService.destroy(id);
    }
}
