import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todo')
export class TodoController {
  constructor(private todoServices: TodoService) {}
  @HttpCode(HttpStatus.CREATED)
  @Get('mock')
  importDummyData() {
    this.todoServices.importDummyData();
    return;
  }

  @Get()
  getAll() {
    return this.todoServices.getAllTasks();
  }

  @Post()
  saveTask(@Body() req: { description: string }) {
    return this.todoServices.saveTask(req.description);
  }

  @Patch(':id')
  updateOneTask(@Param('id', ParseIntPipe) id: number, @Body() req: Todo) {
    return this.todoServices.updateTask(id, req);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.todoServices.deleteTask(id);
  }
}
