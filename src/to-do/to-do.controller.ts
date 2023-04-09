import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Todo } from './entity/to-do.entity';
import { addTodoDto } from './dto/addtodo.dto';
import { updateTodoDto } from './dto/updateTodo.dto';
import { ToDoService } from './to-do.service';
@Controller('to-do')
export class ToDoController {

    constructor(private todoService: ToDoService) { }


    @Get()
    getTodos(): Todo[] {
        return this.todoService.getTodos();
    }

    @Post()
    addTodo(@Body() todo: addTodoDto): Todo {
        return this.todoService.addTodo(todo);
    }

    @Get(':id')
    getTodoById(@Param('id') id: string): Todo {
        return this.todoService.getTodoById(id);
    }

    @Delete(':id')
    deleteTodoById(@Param('id') id: string): Todo {
        return this.todoService.deleteTodoById(id);
    }

    @Patch(':id')
    updateTodo(@Body() todo: updateTodoDto, @Param('id') id: string): Todo {
        return this.updateTodo(todo, id);
    }
}
