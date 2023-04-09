import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {

    @Get()
    getPremier(): string {
        console.log("get");
        return 'get';
    }

    @Post()
    postPremier() {
        console.log("post");
        return 'post';
    }

    @Delete()
    deletePremier() {
        console.log("delete");
        return 'delete';
    }

    @Put()
    putPremier() {
        console.log("put");
        return 'put';
    }

    @Patch()
    patchPremier() {
        console.log("patch");
        return 'patch';
    }

}
