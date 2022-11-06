import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //中间件跨域处理
  app.use(cors());

  app.use(
    session({
      secret: 'XiaoMan',
      name: 'xm.session',
      rolling: true,
      cookie: { maxAge: null },
    }),
  );
  await app.listen(3000);
}
bootstrap();
