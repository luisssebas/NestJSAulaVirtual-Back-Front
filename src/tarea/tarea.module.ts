import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';
import { MateriaEntity } from 'materia/materia.entity';
import { EstudianteEntity } from 'estudiante/estudiante.entity';
import { ProfesorEntity } from 'profesor/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity, MateriaEntity, EstudianteEntity, ProfesorEntity])],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
