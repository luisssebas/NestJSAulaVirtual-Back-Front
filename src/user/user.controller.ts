import { Controller, Get, Post, Body, UsePipes, UseGuards, Render, Res, Req, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from 'shared/validation.pipe';
import { empty } from 'rxjs';

@Controller()
export class UserController {
        
    constructor(private usuarioService: UserService){}
    private logger = new Logger('EstudianteController');

    @Get('login')
    @Render('User/login')
    async showAllUsers(){
        const users = await this.usuarioService.showAll();
        return {users};
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO, @Res() res, @Req() req){
        req.query.method == 'login';
        const user = this.usuarioService.login(data);
        res.redirect('/Curso/index')
        return {user};        
    }

    @Get('register')
    @Render('User/register')
    async showRegister(){
        const users = this.usuarioService.showAll();
        return await {users};
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO, @Res() res){
        this.usuarioService.register(data);
        res.redirect('login');
    }
    @Get('header')
    @Render('User/header')
    async header(@Res() res){
        const user = await this.usuarioService.findOneByToken();   
        console.log(user);             
        res.set("Authorization", "Bearer " + user);
        return {user};
    }
}