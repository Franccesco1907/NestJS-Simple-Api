import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('creates a task that can be retrieved', () => {
    jest.useFakeTimers({ doNotFake: ['performance'] });
    try {
      const payload = { description: 'A task to create', isDone: false };
      const created = controller.create(payload);
      expect(created).toEqual({ id: expect.any(String), ...payload });
      expect(controller.findAll()).toContainEqual(created);
    } finally {
      jest.clearAllTimers();
      jest.useRealTimers();
    }
  });
});
