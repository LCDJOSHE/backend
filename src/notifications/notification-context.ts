import { NotificationStrategy } from './notification-strategy.interface';

export class NotificationContext {
  private strategy: NotificationStrategy;

  setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  execute(message: string) {
    this.strategy.send(message);
  }
}
