import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaDTO } from './materia.dto';

@Controller('materia')
export class MateriaController {

    private logger = new Logger('MateriaController');

    constructor(private materiaService: MateriaService){}

    @Get('index')
    //@UseGuards(new AuthGuard())
    @Render('Materia/index')
    async showAllCursos(){
        const  materia = await this.materiaService.showAll();
        return {materia};
    }

    @Post('create')
    @Render('Materia/create')
    createCurso(@Body() data: MateriaDTO){
        this.logger.log(JSON.stringify(data));
        return this.materiaService.create(data);
    }

    @Get('data/:id')
    readCurso(@Param('id') id: number){
        return this.materiaService.read(id);
    }

    @Put('update/:id')
    updateCurso(@Param('id') id: number, @Body() data: Partial<MateriaDTO>){
        this.logger.log(JSON.stringify(data));
        return this.materiaService.update(id, data);
    }

    @Delete('delete/:id')
    destroyCurso(@Param('id') id:number){
        return this.materiaService.destroy(id);
    }
}
