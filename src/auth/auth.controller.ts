import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, Tokens } from './types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  public async signup(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signup(dto);
  }
  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  public async signin(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signin(dto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('/local/loggout')
  @HttpCode(HttpStatus.OK)
  public async loggout(@Req() req: Request) {
    const user = req.user;
    this.authService.loggout(user['id']);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  public async refresh(@Req() req: Request) {
    const user = req.user;
    this.authService.refreshTokens(user['id'], user['refresh_token']);
  }
}
