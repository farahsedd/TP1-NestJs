import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { uuid } from 'src/constants';


const providerToken = {
    provide: uuid,
    useValue: uuidv4
}

@Global()
@Module({
    providers: [providerToken],
    exports: [providerToken]
})
export class CommonModule {

}
