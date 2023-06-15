import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/local/signup')
  public async signup(@Body() dto: AuthDto): Promise<Tokens> {
    // return this.authService.signup(dto);
    return;
  }
  @Post('/local/signin')
  public async signin() {
    this.authService.signin();
  }
  @Post('/local/loggout')
  public async loggout() {
    this.authService.loggout();
  }
  @Post('/refresh')
  public async refresh() {
    this.authService.refresh();
  }
}
