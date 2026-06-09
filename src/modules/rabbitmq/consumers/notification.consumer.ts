import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CreateNotificationDto } from '../../notifications/dto/create-notification.dto';

@Controller()
export class NotificationConsumer {
  private readonly logger = new Logger(NotificationConsumer.name);

  @EventPattern('notification_event')
  handleNotification(@Payload() data: CreateNotificationDto) {
    this.logger.log(`Notification Received: ${JSON.stringify(data)}`);

    switch (data.event) {
      case 'USER_REGISTERED':
        this.logger.log(`Welcome notification sent to ${data.email}`);
        break;

      case 'PRODUCT_CREATED':
        this.logger.log('Product creation notification processed');
        break;

      case 'FILE_UPLOADED':
        this.logger.log('File upload notification processed');
        break;

      default:
        this.logger.warn(`Unknown event received: ${data.event}`);
    }
  }
}
