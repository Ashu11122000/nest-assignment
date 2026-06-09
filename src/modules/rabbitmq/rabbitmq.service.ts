import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RabbitmqService {
  constructor(private readonly configService: ConfigService) {}

  getQueueName(): string {
    return this.configService.get<string>(
      'RABBITMQ_QUEUE',
      'notifications_queue',
    );
  }

  getRabbitMqUrl(): string {
    return this.configService.get<string>(
      'RABBITMQ_URL',
      'amqp://guest:guest@localhost:5672',
    );
  }
}
