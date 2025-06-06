
// src/notifications/strategies/sms-notification.strategy.ts
import { NotificationStrategy } from './notification-strategy.interface';

export class SmsNotificationStrategy implements NotificationStrategy {
  send(message: string): void {
    console.log(`SMS enviado: ${message}`);
  }
}
