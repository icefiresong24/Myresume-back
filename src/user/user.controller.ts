import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  create(@Body() userinfo) {
    console.log(userinfo);

    return this.userService.create(userinfo);
  }

  @Get('getCaptcha')
  findAll(@Req() req) {
    // req.session.code = captcha.text;
    //  res.type('image/svg+xml')
    //  res.send('niaho')
    console.log(req.url);

    return this.userService.getCaptcha();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);

    return this.userService.findOne(+id);
  }
}
