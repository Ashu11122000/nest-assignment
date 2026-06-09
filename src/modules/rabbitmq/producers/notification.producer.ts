import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { CreateNotificationDto } from '../../notifications/dto/create-notification.dto';

@Injectable()
export class NotificationProducer {
  private readonly logger = new Logger(NotificationProducer.name);

  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  async sendNotification(payload: CreateNotificationDto): Promise<void> {
    this.logger.log(`Publishing Event: ${JSON.stringify(payload)}`);

    await lastValueFrom(this.client.emit('notification_event', payload));
  }
}
