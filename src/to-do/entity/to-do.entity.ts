import { TodoStatusEnum } from "src/enum/state.enum";

export class Todo {
    id: string;
    name: string;
    description: string;
    dateDeCréation: Date;
    statut: TodoStatusEnum;
}