import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private users = [{ id: 1, email: 'test@example.com', password: '123456' }];

  async signup(dto: SignupDto) {
    const exists = this.users.find((user) => user.email === dto.email);
    if (exists) {
      throw new UnauthorizedException('User already exists');
    }

    const newUser = {
      id: this.users.length + 1,
      email: dto.email,
      password: dto.password,
    };

    this.users.push(newUser);
    return { message: 'User created', user: newUser };
  }

  async login(dto: LoginDto) {
    const user = this.users.find(
      (u) => u.email === dto.email && u.password === dto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
