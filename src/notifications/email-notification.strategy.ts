import { NotificationStrategy } from './notification-strategy.interface';

export class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`📧 Enviando notificación por correo: ${message}`);
  }
}
