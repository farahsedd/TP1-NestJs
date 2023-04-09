import { Optional } from "@nestjs/common";
export class updateTodoDto {
    @Optional()
    name: string;
    @Optional()
    description: string;
}