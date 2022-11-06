import { Injectable } from '@nestjs/common';
import * as svgCode from 'svg-captcha';
@Injectable()
export class UserService {
  create(userinfo) {
    return {
      success: true,
      message: '成功',
      data: {
        data: userinfo,
      },
    };
  }

  getCaptcha() {
    const captcha = svgCode.create({
      size: 4,
      fontSize: 40,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    return {
      msg: '成功',
      code: 200,
      data: captcha,
    };
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
