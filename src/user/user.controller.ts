import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from 'shared/validation.pipe';
//import { AuthGuard } from 'shared/auth.guard';
import { User } from './user.decorator';


@Controller()
export class UserController {
    constructor(private usuarioService: UserService){}

    @Get('Usuario')
    showAllUsers(){
        return this.usuarioService.showAll();
    }

    @Post('login')
    @UsePipes(new ValidationPipe())    
    login(@Body() data: UserDTO){
        return this.usuarioService.login(data);
    }
    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO){
        return this.usuarioService.register(data);
    }
}