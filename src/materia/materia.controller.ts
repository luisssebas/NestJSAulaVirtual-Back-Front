import { Controller, Delete, Put, Get, Post, Logger, Render, Body, Param, Res, Req } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaDTO } from './materia.dto';

@Controller('materia')
export class MateriaController {

    private logger = new Logger('MateriaController');

    constructor(private materiaService: MateriaService){}

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
        const materias = this.materiaService.read(id);
        return {materias};
    }

    //Update POST

    @Post('update/:id')
    updateMateria(@Param('id') id: number, @Body() data: Partial<MateriaDTO>, @Req() req){
        this.logger.log(JSON.stringify(data));
        req.query.method == 'update';
        return this.materiaService.update(id, data);
    }

    @Delete('delete/:id')
    destroyMateria(@Param('id') id:number, @Req() req){
        req.query.method == 'delete';
        return this.materiaService.destroy(id);
    }
}
