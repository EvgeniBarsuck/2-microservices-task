import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserProps, UserEntity } from './domain/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async createUser(@Body() createUserProps: CreateUserProps): Promise<string> {
    return this.userService.createUser(createUserProps);
  }

  @Get(':id')
  async findUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findUser(id);
  }
}
