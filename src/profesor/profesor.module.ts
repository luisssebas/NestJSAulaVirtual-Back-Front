import { Module } from '@nestjs/common';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from 'curso/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity,CursoEntity])],
  controllers: [ProfesorController],
  providers: [ProfesorService]
})
export class ProfesorModule {}
