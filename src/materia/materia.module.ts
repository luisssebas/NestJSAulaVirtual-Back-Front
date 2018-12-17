import { Module } from '@nestjs/common';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaEntity } from './materia.entity';
import { CursoEntity } from 'curso/curso.entity';
import { CursoService } from 'curso/curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([MateriaEntity, CursoEntity])],
  controllers: [MateriaController],
  providers: [MateriaService,CursoService]
})
export class MateriaModule {}
