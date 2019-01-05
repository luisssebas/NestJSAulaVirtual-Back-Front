import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MateriaModule } from './materia/materia.module';
import { ProfesorModule } from './profesor/profesor.module';
import { TareaModule } from './tarea/tarea.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from 'shared/http-error.filter';
import { LoggingInterceptor } from 'shared/logging.interceptor';
import { UserModule } from './user/user.module';
import { UserController } from 'user/user.controller';
import { UserService } from 'user/user.service';
import { AuthGuard } from 'shared/auth.guard';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CursoModule, EstudianteModule, MateriaModule, ProfesorModule, TareaModule, UserModule],
  controllers: [AppController,UserController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },UserService,
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  }],
})
export class AppModule {}
