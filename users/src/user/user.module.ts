import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './database/database.repository';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export class UserModule {}
