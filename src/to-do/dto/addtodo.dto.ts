import { IsNotEmpty } from "class-validator";
export class addTodoDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
}