import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';
import { MateriaEntity } from 'materia/materia.entity';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { ProfesorEntity } from 'profesor/profesor.entity';
import { MateriaService } from 'materia/materia.service';
import { EstudianteService } from 'estudiante/estudiante.service';
import { ProfesorService } from 'profesor/profesor.service';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity, MateriaEntity, EstudianteEntity, ProfesorEntity])],
  controllers: [TareaController],
  providers: [TareaService/*EstudianteService,MateriaService,ProfesorService*/]
})
export class TareaModule {}
