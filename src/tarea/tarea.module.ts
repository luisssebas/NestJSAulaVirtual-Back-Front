import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity])],
  controllers: [TareaController],
  providers: [TareaService]
})
export class TareaModule {}
