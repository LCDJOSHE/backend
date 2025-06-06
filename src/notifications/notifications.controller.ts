import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SmsNotificationStrategy } from './sms-notification.strategy'; // O la estrategia que uses

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  getAll() {
    return this.notificationsService.findAll();
  }

  @Post()
  create(@Body('message') message: string) {
    const strategy = new SmsNotificationStrategy(); // cambia según tu tipo
    return this.notificationsService.create(message, strategy);
  }
}
