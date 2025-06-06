// src/notifications/interfaces/notification-strategy.interface.ts

export interface NotificationStrategy {
  send(message: string): void;
}
