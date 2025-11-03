import { Module } from "@nestjs/common";
import { PostService } from "./service/post.service";
import { PostResolver } from "./interface/resolvers/post.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./domain/entities/post.entity";
import { AccountModule } from "src/accounts/account.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  providers: [PostService, PostResolver],
  imports: [TypeOrmModule.forFeature([Post]), AccountModule, ConfigModule],
})
export class PostModule {}
