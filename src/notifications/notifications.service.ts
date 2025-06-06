import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { NotificationContext } from './notification-context';
import { NotificationStrategy } from './notification-strategy.interface';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationsRepository: Repository<Notification>,
  ) {}

  async findAll(): Promise<Notification[]> {
    return this.notificationsRepository.find();
  }

  async create(message: string, strategy: NotificationStrategy) {
    const context = new NotificationContext();
    context.setStrategy(strategy);
    context.execute(message);

    const notification = this.notificationsRepository.create({ message });
    return this.notificationsRepository.save(notification);
  }
}
