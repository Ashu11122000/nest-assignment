import { Injectable, Logger } from '@nestjs/common';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationProducer } from '../rabbitmq/producers/notification.producer';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly notificationProducer: NotificationProducer) {}

  async processNotification(notification: CreateNotificationDto): Promise<{
    success: boolean;
    message: string;
  }> {
    this.logger.log(`Processing Notification: ${JSON.stringify(notification)}`);

    await this.notificationProducer.sendNotification(notification);

    return {
      success: true,
      message: 'Notification event published',
    };
  }
}
