import { BaseUser } from './user-base.interface';

export type CreateUser = Omit<BaseUser, 'id'>;
