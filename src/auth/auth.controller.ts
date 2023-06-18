import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, Tokens } from './types';
import { GetCurrentUser, GetCurrentUserId, Public, RtGuard } from './common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  public async signup(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signup(dto);
  }
  @Public()
  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  public async signin(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signin(dto);
  }

  @Post('/local/loggout')
  @HttpCode(HttpStatus.OK)
  public async loggout(@GetCurrentUserId('sub') userId: number) {
    this.authService.loggout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('/local/refresh')
  @HttpCode(HttpStatus.OK)
  public async refresh(
    @GetCurrentUserId('sub') userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
