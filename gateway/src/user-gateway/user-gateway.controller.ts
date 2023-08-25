import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserGatewayService } from './user-gateway.service';
import { CreateUser } from './interfaces/create-user.interface';
import { BaseUser } from './interfaces/user-base.interface';

@Controller('user-gateway')
export class UserGatewayController {
  constructor(private readonly userGatewatService: UserGatewayService) {}

  @Get('get-user/:id')
  async getUser(@Param('id') id: string): Promise<BaseUser> {
    return this.userGatewatService.getUser(id);
  }

  @Post('create-user')
  async createUser(@Body() createUser: CreateUser): Promise<string> {
    return this.userGatewatService.createUser(createUser);
  }
}
