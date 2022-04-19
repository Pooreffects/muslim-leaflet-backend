import { Injectable } from '@nestjs/common';

/* Providers handle business logic and data modelling, keep MVC in mind  */
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I am signed up 👨‍💻' };
  }
  login() {
    return { msg: 'I have logged in 🙄' };
  }
}
