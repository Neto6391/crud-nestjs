import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...usersProviders]
})
export class UsersModule {}
