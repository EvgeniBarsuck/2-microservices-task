import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GetUser } from './interfaces/get-user.interface';
import { lastValueFrom } from 'rxjs';
import { CreateUser } from './interfaces/create-user.interface';

@Injectable()
export class UserGatewayService {
  constructor(private readonly httpSerivce: HttpService) {}

  public createUser(props: CreateUser): Promise<string> {
    return lastValueFrom(
      this.httpSerivce.post<string>(`http://localhost:3001/users`, props),
    ).then((response) => response.data);
  }

  public getUser(id: string): Promise<GetUser> {
    return lastValueFrom(
      this.httpSerivce.get<GetUser>(`http://localhost:3001/users/${id}`),
    ).then((response) => response.data);
  }
}
