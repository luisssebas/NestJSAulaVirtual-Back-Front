import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorController } from './profesor.controller';

describe('Profesor Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProfesorController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProfesorController = module.get<ProfesorController>(ProfesorController);
    expect(controller).toBeDefined();
  });
});
