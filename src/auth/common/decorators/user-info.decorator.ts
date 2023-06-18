import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserInfo = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    console.log(request.user['email']);
    return request.user;
    //   const request = context.switchToHttp().getRequest();
    //   return request.user;
  },
);
