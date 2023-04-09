import { Inject, Injectable } from '@nestjs/common';
import { addTodoDto } from './dto/addtodo.dto';
import { Todo } from './entity/to-do.entity';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from 'src/enum/state.enum';
import { updateTodoDto } from './dto/updateTodo.dto';
import { uuid } from 'src/constants';

@Injectable()
export class ToDoService {
    constructor(@Inject(uuid) private uuid) { };
    listeTodos = [];

    getTodos(): Todo[] {
        return this.listeTodos;
    }

    addTodo(todo: addTodoDto): Todo {
        var newTodo = new Todo();
        newTodo.id = this.uuid();
        newTodo.name = todo.name;
        newTodo.description = todo.description;
        newTodo.dateDeCréation = new Date();
        newTodo.statut = TodoStatusEnum.waiting;
        console.log(newTodo);
        this.listeTodos.push(newTodo);
        return newTodo
    }

    getTodoById(id: string): Todo {
        for (var element of this.listeTodos) {
            console.log(element);
            if (element.id == id) {
                console.log(element);
                return element;
            }
        };
        console.log('oops');
        return null;
    }

    deleteTodoById(id: string): Todo {
        for (var i of this.listeTodos) {
            if (i.id == id) {
                console.log(i);
                this.listeTodos.splice(this.listeTodos.indexOf(i), 1);
            }
        };
        console.log(this.listeTodos);
        return null;
    }
    updateTodo(todo: updateTodoDto, id: string): Todo {
        for (var i of this.listeTodos) {
            if (i.id == id) {
                console.log(i);
                i.name = todo.name;
                i.description = todo.description;
                return i;
            }
        };
        return null;
    }

}
