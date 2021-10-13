import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db.module'
import { UserModule } from './User/user.module'; 

@Module({
  imports: [ConfigModule.forRoot(), DbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


