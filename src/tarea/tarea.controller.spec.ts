import { Test, TestingModule } from '@nestjs/testing';
import { TareaController } from './tarea.controller';

describe('Tarea Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TareaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TareaController = module.get<TareaController>(TareaController);
    expect(controller).toBeDefined();
  });
});
