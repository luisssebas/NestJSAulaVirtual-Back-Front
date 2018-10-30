import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteController } from './estudiante.controller';

describe('Estudiante Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EstudianteController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EstudianteController = module.get<EstudianteController>(EstudianteController);
    expect(controller).toBeDefined();
  });
});
