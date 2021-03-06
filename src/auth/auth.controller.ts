import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

/* Controllers handle requests/responses and API routing, keep MVC in mind  */
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('login')
  login() {
    this.authService.login();
  }
}
