import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { verify } from "jsonwebtoken";
import { Observable } from "rxjs";
import { Account } from "../domain/entities/account.entity";
import { GraphQLError } from "graphql";
import { ConfigService } from "@nestjs/config";

export type AccountGuardContext = {
  accountId: Account["id"];
};

@Injectable()
export class AccountGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const graphqlContext = GqlExecutionContext.create(context).getContext();
    const req = graphqlContext.req;
    const token: string = req.headers?.authorization;
    const secretKey = this.configService.get("JWT_SECREAT_KEY");
    const payload = verify(token.split(" ")[1], secretKey);
    if (typeof payload === "string") throw new GraphQLError("Approval dailed.");
    graphqlContext.accountId = payload.id;
    return true;
  }
}
