import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitmqService } from './rabbitmq.service';
import { NotificationProducer } from './producers/notification.producer';

@Module({
  imports: [
    ConfigModule,

    ClientsModule.registerAsync([
      {
        name: 'NOTIFICATION_SERVICE',

        imports: [ConfigModule],

        inject: [ConfigService],

        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,

          options: {
            urls: [
              configService.get<string>('RABBITMQ_URL') ??
                'amqp://guest:guest@localhost:5672',
            ],

            queue:
              configService.get<string>('RABBITMQ_QUEUE') ??
              'notifications_queue',

            queueOptions: {
              durable: false,
            },
          },
        }),
      },
    ]),
  ],

  providers: [RabbitmqService, NotificationProducer],

  exports: [RabbitmqService, NotificationProducer],
})
export class RabbitmqModule {}
