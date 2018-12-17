import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaDTO } from './tarea.dto';
import { EstudianteService } from 'estudiante/estudiante.service';
import { ProfesorService } from 'profesor/profesor.service';
import { MateriaService } from 'materia/materia.service';

@Controller('tarea')
export class TareaController {

    private logger = new Logger('TareaController');

    constructor(private tareaService: TareaService,/* 
                private estudianteService: EstudianteService, 
                private profesorService: ProfesorService, 
                private materiaService: MateriaService*/){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Tarea/index')
    async showAllTareas(){
        const  tareas = await this.tareaService.showAll();
        return {tareas};
    }

    //Create GET

    @Get('create')    
    @Render('Tarea/create')
    async showTareas(){
        /*const estudiantes = await this.estudianteService.showAll();
        const profesores = await this.profesorService.showAll();
        const materias = await this.materiaService.showAll();*/
        const  tareas = await this.tareaService.showAll();
    return {tareas/*,estudiantes,profesores,materias*/};
    }

    //Create POST

    @Post('create')
    createTarea(@Body() data: TareaDTO, @Res() res){
        this.logger.log(JSON.stringify(data));
        this.tareaService.create(data)
        res.redirect('index');
    }

    //Update GET

    @Get('update/:id')
    @Render('Tarea/update')
    async readTarea(@Param('id') id: number){
        /*const estudiantes = await this.estudianteService.showAll();
        const profesores = await this.profesorService.showAll();
        const materias = await this.materiaService.showAll();*/
        const tareas = await this.tareaService.read(id);
        return {tareas/*,estudiantes,profesores,materias*/};
    }

    //Update POST

    @Post('update/:id')
    updateTarea(@Param('id') id: number, @Body() data: Partial<TareaDTO>, @Req() req, @Res() res){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        this.tareaService.update(id, data);
        res.redirect('index');
    }

    @Delete('delete/:id')
    destroyTarea(@Param('id') id:number, @Req() req, @Res() res){
        req.query.method == 'delete';
        this.tareaService.destroy(id);
        res.redirect('index');
    }

    //Calificar GET

    @Get('calificar/:id')
    @Render('Tarea/calificacion')
    async readgradeTarea(@Param('id') id: number){
        const tareas = await this.tareaService.read(id);
        return {tareas};
    }

    //Calificar POST

    @Post('update/:id')
    async gradeTarea(@Param('id') id: number, @Body() data: Partial<TareaDTO>, @Req() req, @Res() res){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        this.tareaService.update(id, data);
        res.redirect('index');
    }

}
