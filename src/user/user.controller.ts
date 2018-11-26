import { Controller, Get, Post, Body, UsePipes, UseGuards, Render } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from 'shared/validation.pipe';


@Controller()
export class UserController {
    constructor(private usuarioService: UserService){}

    @Get('User/login')
    async showAllUsers(){
        const users = this.usuarioService.showAll();
        return await {users};
    }

    @Post('User/login')
    @UsePipes(new ValidationPipe())
    @Render('User/login')    
    login(@Body() data: UserDTO){
        return this.usuarioService.login(data);
    }
    @Post('User/register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO){
        return this.usuarioService.register(data);
    }
}