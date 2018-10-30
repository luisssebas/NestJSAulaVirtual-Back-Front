import { Test, TestingModule } from '@nestjs/testing';
import { CursoController } from './curso.controller';

describe('Curso Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CursoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CursoController = module.get<CursoController>(CursoController);
    expect(controller).toBeDefined();
  });
});
