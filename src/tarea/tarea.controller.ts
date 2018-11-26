import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaDTO } from './tarea.dto';

@Controller('tarea')
export class TareaController {

    private logger = new Logger('TareaController');

    constructor(private tareaService: TareaService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Tarea/index')
    async showAllTareas(){
        const  tareas = await this.tareaService.showAll();
        return {tareas};
    }

    //Create GET

    @Get('create')    
    @Render('Curso/create')
    async showTareas(){
        const  tareas = await this.tareaService.showAll();
        return {tareas};
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
        const tareas = await this.tareaService.read(id);
        return {tareas};
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
}
