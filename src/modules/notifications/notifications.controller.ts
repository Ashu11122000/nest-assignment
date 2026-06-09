import { Body, Controller, Post } from '@nestjs/common';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.services';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async processNotification(@Body() notification: CreateNotificationDto) {
    return await this.notificationsService.processNotification(notification);
  }
}
