import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from 'curso/curso.entity';
import { CursoService } from 'curso/curso.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstudianteEntity, CursoEntity])],
  controllers: [EstudianteController],
  providers: [EstudianteService, CursoService]
})
export class EstudianteModule {}
