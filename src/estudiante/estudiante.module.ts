import { Module } from '@nestjs/common';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstudianteEntity])],
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
