import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateTodo } from 'src/util';
import { Todo } from './todo.modal';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  async importDummyData() {
    const dummyData = generateTodo();
    const dumm = await this.prisma.todo.createMany({
      data: dummyData,
    });
  }

  async getAllTasks() {
    const allTasks = await this.prisma.todo.findMany();
    return allTasks;
  }

  async updateTask(id: number, task: Todo) {
    console.log(task);
    const newTodo = await this.prisma.todo.update({
      where: {
        id,
      },
      data: task,
    });

    return newTodo;
  }

  async deleteTask(id: number) {
    const res = await this.prisma.todo.delete({
      where: {
        id,
      },
    });

    return;
  }

  async saveTask(description: string) {
    return await this.prisma.todo.create({
      data: {
        description,
      },
    });
  }
}
