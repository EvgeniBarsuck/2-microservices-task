import { Injectable } from '@nestjs/common';
import { UserRepository } from './database/database.repository';
import { CreateUserProps, UserEntity } from './domain/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public createUser(props: CreateUserProps) {
    return this.userRepository.createUser(props);
  }

  public findUser(key: string): UserEntity {
    return this.userRepository.getUser(key);
  }
}
