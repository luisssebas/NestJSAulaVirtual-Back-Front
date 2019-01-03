import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO, UserRO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) 
    private usuarioRepository: Repository<UserEntity>
    ){}

    async showAll(){
        const users = await this.usuarioRepository.find();
        return await users.map(user => user.toResponseObject(true));
    }

    async login(data:UserDTO){
        const {username, password} = data;
        const user = await this.usuarioRepository.findOne({where: {username}});
        if(!user || !(await user.comparePassword(password))){
            throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObject();
    }

    async register(data: UserDTO){
        const {username} = data;
        let user = await this.usuarioRepository.findOne({where: {username}});
        if(user){
            throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
        }
        user = await this.usuarioRepository.create(data);
        await this.usuarioRepository.save(user);
        return user.toResponseObject();
    }
}