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
    updateTarea(@Param('id') id: number, @Body() data: Partial<TareaDTO>, @Req() req){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        return this.tareaService.update(id, data);
    }

    @Delete('delete/:id')
    destroyTarea(@Param('id') id:number, @Req() req){
        req.query.method == 'delete';
        return this.tareaService.destroy(id);
    }
}
