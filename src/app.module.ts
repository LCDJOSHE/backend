import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
     type: 'postgres',
      url: process.env.DATABASE_URL,
      port: 5432,
      username: 'postgres', // tu usuario de postgres
      password: 'cPANzeaIyQWhRnYCjyBdGVPamIdCZPDu', // tu contraseña
      database: 'railway',
     entities: [__dirname + /**/"*.entity{.ts,.js}"],
      synchronize: true,
}),
  NotificationsModule],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}