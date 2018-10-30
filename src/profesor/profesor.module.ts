import { Module } from '@nestjs/common';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorEntity])],
  controllers: [ProfesorController],
  providers: [ProfesorService]
})
export class ProfesorModule {}
