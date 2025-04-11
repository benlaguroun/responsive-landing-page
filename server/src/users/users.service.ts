import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "hashed-password", // In a real app, you'd hash passwords
    },
  ];

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
