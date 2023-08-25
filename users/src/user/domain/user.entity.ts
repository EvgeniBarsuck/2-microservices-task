import { v4 as uuidv4 } from 'uuid';

export interface CreateUserProps {
  name: string;
  phone: string;
}

export class UserEntity {
  private id: string;
  private props: CreateUserProps;

  constructor(props: CreateUserProps) {
    this.id = uuidv4();
    this.props = props;
  }

  public getId(): string {
    return this.id;
  }

  public getUserInfo() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
