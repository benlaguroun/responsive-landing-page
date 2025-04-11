import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(email: string, password: string): Promise<User> {
    const user: User = {
      id: Date.now().toString(),
      email,
      password,
    };
    this.users.push(user);
    return user;
  }
}