import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../../src/app.module';

interface LoginResponse {
  accessToken: string;
}

describe('Products E2E', () => {
  let app: INestApplication;
  let token = '';

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();

    const email = `product${Date.now()}@mail.com`;

    await request(app.getHttpServer()).post('/auth/register').send({
      firstName: 'Product',
      lastName: 'Tester',
      email,
      phone: '9999999999',
      password: 'Password123',
    });

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email,
        password: 'Password123',
      });

    const body = loginResponse.body as LoginResponse;

    token = body.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/products (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Laptop',
        description: 'Gaming Laptop',
        price: 1000,
        stock: 10,
      });

    expect(response.status).toBeLessThan(500);
  });

  it('/products (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/products')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
