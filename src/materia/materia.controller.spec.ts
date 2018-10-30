import { Test, TestingModule } from '@nestjs/testing';
import { MateriaController } from './materia.controller';

describe('Materia Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MateriaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MateriaController = module.get<MateriaController>(MateriaController);
    expect(controller).toBeDefined();
  });
});
