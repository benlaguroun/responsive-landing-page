import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  signup(dto: SignupDto) {
    return {
      message: 'User signed up successfully',
      user: { ...dto, id: Date.now() },
    };
  }

  login(dto: LoginDto) {
    return {
      message: 'User logged in successfully',
      user: { email: dto.email },
    };
  }
}
