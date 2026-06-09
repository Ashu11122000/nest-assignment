import { Module } from '@nestjs/common';

import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.services';

import { RabbitmqModule } from '../rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitmqModule],

  controllers: [NotificationsController],

  providers: [NotificationsService],
})
export class NotificationsModule {}
