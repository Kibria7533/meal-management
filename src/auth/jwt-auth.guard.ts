import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    private readonly rolePassed : number;
    constructor(role : number) {
      super();
      this.rolePassed =role;
    }

    canActivate(context: ExecutionContext) {
      // Add your custom authentication logic here
      // for example, call super.logIn(request) to establish a session.
      return super.canActivate(context);
    }
  
    handleRequest(err, user, info) {
      console.log(user,err,'Magic');
      // You can throw an exception based on either "info" or "err" arguments
      if (err || !user || user.role !=this.rolePassed) {
        throw err || new UnauthorizedException();
      }
      return user;
    }
  }