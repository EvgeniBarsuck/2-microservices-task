import { HashTable } from 'src/base/utils/hash-table/hash-table';
import { CreateUserProps, UserEntity } from '../domain/user.entity';
import { Injectable } from '@nestjs/common';

const users = new HashTable<UserEntity>({});

@Injectable()
export class UserRepository {
  constructor() {}

  public createUser(props: CreateUserProps): string {
    const user = new UserEntity(props);

    users.set(user, user.getId());

    return user.getId();
  }

  public getUser(key: string): UserEntity {
    return users.get(key)?.value ?? null;
  }
}
