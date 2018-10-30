import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MateriaModule } from './materia/materia.module';
import { ProfesorModule } from './profesor/profesor.module';
import { TareaModule } from './tarea/tarea.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CursoModule, EstudianteModule, MateriaModule, ProfesorModule, TareaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
