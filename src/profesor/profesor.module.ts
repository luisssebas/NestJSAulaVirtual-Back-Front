import { Module } from '@nestjs/common';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { CursoService } from 'curso/curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity,CursoEntity])],
  controllers: [ProfesorController],
  providers: [ProfesorService, CursoService]
})
export class ProfesorModule {}
