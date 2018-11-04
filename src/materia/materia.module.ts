import { Module } from '@nestjs/common';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaEntity } from './materia.entity';
import { CursoEntity } from 'curso/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MateriaEntity, CursoEntity])],
  controllers: [MateriaController],
  providers: [MateriaService]
})
export class MateriaModule {}
