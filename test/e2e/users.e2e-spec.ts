import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request, { Response } from 'supertest';

import { AppModule } from '../../src/app.module';

describe('Users E2E', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (POST)', async () => {
    const response: Response = await request(app.getHttpServer())
      .post('/users')
      .send({
        firstName: 'Ashish',
        lastName: 'Sharma',
        email: `user${Date.now()}@mail.com`,
        phone: '9999999999',
      });

    expect(response.status).toBeLessThan(500);
  });

  it('/users (GET)', async () => {
    const response: Response = await request(app.getHttpServer()).get('/users');

    expect(response.status).toBe(200);
  });
});
