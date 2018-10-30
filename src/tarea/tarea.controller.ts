import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaDTO } from './tarea.dto';

@Controller('tarea')
export class TareaController {

    private logger = new Logger('TareaController');

    constructor(private tareaService: TareaService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Tarea/index')
    async showAllCursos(){
        const  tarea = await this.tareaService.showAll();
        return {tarea};
    }

    @Post('create')
    @Render('Tarea/create')
    createCurso(@Body() data: TareaDTO){
        this.logger.log(JSON.stringify(data));
        return this.tareaService.create(data);
    }

    @Get('data/:id')
    readCurso(@Param('id') id: number){
        return this.tareaService.read(id);
    }

    @Put('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<TareaDTO>){
        this.logger.log(JSON.stringify(data));
        return this.tareaService.update(id, data);
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.tareaService.destroy(id);
    }
}
