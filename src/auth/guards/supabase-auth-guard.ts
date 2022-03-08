import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//import { GqlExecutionContext } from '@nestjs/graphql';


@Injectable()
export class SupabaseAuthGuard extends AuthGuard('supabase') {
  getRequest(context: ExecutionContext) {
    //context.getArgByIndex(0);
    console.log("in auth guard")
    return context.getArgByIndex(0);
    //const ctx = GqlExecutionContext.create(context);
    //return ctx.getContext().req;
  }
}