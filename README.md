# NestJS Assignment

A backend application built with NestJS demonstrating CRUD operations, authentication, authorization, testing, third-party integrations, microservices, validation, error handling, and deployment readiness.

---

# Assignment Requirements

* Build a simple CRUD REST API using NestJS and PostgreSQL
* Implement user authentication and authorization using JWT
* Integrate unit and end-to-end tests
* Connect to a third-party service (Cloudinary)
* Create a lightweight microservice using RabbitMQ
* Implement request validation and structured error handling
* Dockerize the application for deployment

---

# Tech Stack

## Backend

* NestJS
* TypeScript
* Node.js

## Database

* PostgreSQL
* TypeORM

## Authentication

* JWT
* Passport
* bcrypt

## Validation

* class-validator
* class-transformer

## Testing

* Jest
* Supertest

## File Storage

* Cloudinary

## Messaging

* RabbitMQ

## Deployment

* Docker
* Docker Compose

---

# Project Setup

## 1. Install NestJS CLI

```bash
npm install -g @nestjs/cli
```

Verify installation:

```bash
nest --version
```

---

## 2. Create NestJS Project

```bash
nest new nest-assignment
```

Select:

```text
npm
```

Move into the project:

```bash
cd nest-assignment
```

Start development server:

```bash
npm run start:dev
```

Application will run at:

```text
http://localhost:3000
```

Expected response:

```text
Hello World!
```

---

# Installed Dependencies

## Database

```bash
npm install @nestjs/typeorm typeorm pg
```

Purpose:

* PostgreSQL integration
* ORM support using TypeORM

---

## Authentication

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
```

Development types:

```bash
npm install -D @types/passport-jwt @types/bcrypt
```

Purpose:

* JWT Authentication
* Passport Strategies
* Password Hashing

---

## Validation

```bash
npm install class-validator class-transformer
```

Purpose:

* DTO Validation
* Request Transformation

---

## Configuration Management

```bash
npm install @nestjs/config
```

Purpose:

* Environment Variable Management
* Configuration Loading

---

## File Upload

```bash
npm install @nestjs/platform-express multer
```

Development types:

```bash
npm install -D @types/multer
```

Purpose:

* File Upload Handling
* Multipart Form Data Processing

---

## Cloudinary Integration

```bash
npm install cloudinary
```

Purpose:

* Cloud File Storage
* Image and Document Uploads

---

## RabbitMQ Microservices

```bash
npm install @nestjs/microservices amqplib amqp-connection-manager
```

Purpose:

* Event Driven Communication
* Message Queue Processing
* Microservice Architecture

---

## Testing

```bash
npm install supertest
npm install -D @types/supertest
```

Purpose:

* API Integration Testing
* End-to-End Testing

---

# Docker Installation

Verify Docker installation:

```bash
docker --version
```

Verify Docker Compose:

```bash
docker compose version
```

Expected Output Example:

```bash
Docker version 28.x.x
Docker Compose version v2.x.x
```

---

## Next Steps

* Configure PostgreSQL using Docker
* Configure RabbitMQ using Docker
* Create Environment Variables
* Configure TypeORM
* Configure Validation Pipe
* Implement Users Module
* Implement JWT Authentication
* Implement Role-Based Authorization
* Build CRUD APIs
* Integrate Cloudinary
* Create RabbitMQ Microservice
* Add Unit Tests
* Add E2E Tests
* Dockerize Application

---

# Folder Structure

```text
nest-assignment/
│
├── src/
│   │
│   ├── main.ts
│   ├── app.module.ts
│   │
│   ├── config/
│   │   ├── configuration.ts
│   │   ├── database.config.ts
│   │   ├── jwt.config.ts
│   │   ├── cloudinary.config.ts
│   │   ├── rabbitmq.config.ts
│   │   └── validation.config.ts
│   │
│   ├── common/
│   │   │
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   ├── public.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   │
│   │   ├── enums/
│   │   │   ├── role.enum.ts
│   │   │   └── token-type.enum.ts
│   │   │
│   │   ├── filters/
│   │   │   ├── all-exceptions.filter.ts
│   │   │   ├── http-exception.filter.ts
│   │   │   └── database-exception.filter.ts
│   │   │
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   ├── roles.guard.ts
│   │   │   └── local-auth.guard.ts
│   │   │
│   │   ├── interceptors/
│   │   │   ├── logging.interceptor.ts
│   │   │   ├── response.interceptor.ts
│   │   │   └── timeout.interceptor.ts
│   │   │
│   │   ├── middleware/
│   │   │   └── logger.middleware.ts
│   │   │
│   │   ├── pipes/
│   │   │   ├── validation.pipe.ts
│   │   │   └── parse-id.pipe.ts
│   │   │
│   │   ├── constants/
│   │   │   ├── messages.constant.ts
│   │   │   ├── jwt.constant.ts
│   │   │   └── rabbitmq.constant.ts
│   │   │
│   │   ├── interfaces/
│   │   │   ├── jwt-payload.interface.ts
│   │   │   ├── request-user.interface.ts
│   │   │   └── api-response.interface.ts
│   │   │
│   │   └── utils/
│   │       ├── hash.util.ts
│   │       ├── pagination.util.ts
│   │       └── response.util.ts
│   │
│   ├── database/
│   │   ├── database.module.ts
│   │   ├── database.providers.ts
│   │   ├── data-source.ts
│   │   │
│   │   ├── migrations/
│   │   │   ├── 001-create-users.ts
│   │   │   ├── 002-create-products.ts
│   │   │   └── 003-create-files.ts
│   │   │
│   │   └── seeds/
│   │       ├── admin.seed.ts
│   │       └── user.seed.ts
│   │
│   ├── modules/
│   │   │
│   │   ├── auth/
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   ├── login.dto.ts
│   │   │   │   ├── register.dto.ts
│   │   │   │   └── refresh-token.dto.ts
│   │   │   │
│   │   │   ├── strategies/
│   │   │   │   ├── jwt.strategy.ts
│   │   │   │   └── local.strategy.ts
│   │   │   │
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   └── auth.repository.ts
│   │   │
│   │   ├── users/
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   ├── create-user.dto.ts
│   │   │   │   ├── update-user.dto.ts
│   │   │   │   └── query-user.dto.ts
│   │   │   │
│   │   │   ├── entities/
│   │   │   │   └── user.entity.ts
│   │   │   │
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   └── users.repository.ts
│   │   │
│   │   ├── products/
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   ├── create-product.dto.ts
│   │   │   │   ├── update-product.dto.ts
│   │   │   │   └── query-product.dto.ts
│   │   │   │
│   │   │   ├── entities/
│   │   │   │   └── product.entity.ts
│   │   │   │
│   │   │   ├── products.controller.ts
│   │   │   ├── products.service.ts
│   │   │   ├── products.module.ts
│   │   │   └── products.repository.ts
│   │   │
│   │   ├── uploads/
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   └── upload-file.dto.ts
│   │   │   │
│   │   │   ├── entities/
│   │   │   │   └── file.entity.ts
│   │   │   │
│   │   │   ├── uploads.controller.ts
│   │   │   ├── uploads.service.ts
│   │   │   ├── uploads.module.ts
│   │   │   └── cloudinary.service.ts
│   │   │
│   │   ├── notifications/
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   └── create-notification.dto.ts
│   │   │   │
│   │   │   ├── notifications.controller.ts
│   │   │   ├── notifications.service.ts
│   │   │   └── notifications.module.ts
│   │   │
│   │   └── rabbitmq/
│   │       │
│   │       ├── consumers/
│   │       │   └── notification.consumer.ts
│   │       │
│   │       ├── producers/
│   │       │   └── notification.producer.ts
│   │       │
│   │       ├── rabbitmq.service.ts
│   │       └── rabbitmq.module.ts
│   │
│   ├── microservices/
│   │   │
│   │   ├── notification-service/
│   │   │   ├── notification.controller.ts
│   │   │   ├── notification.service.ts
│   │   │   ├── notification.module.ts
│   │   │   └── main.ts
│   │
│   └── types/
│       ├── express.d.ts
│       └── cloudinary.d.ts
│
├── test/
│   │
│   ├── unit/
│   │   ├── auth.service.spec.ts
│   │   ├── users.service.spec.ts
│   │   ├── products.service.spec.ts
│   │   └── uploads.service.spec.ts
│   │
│   ├── e2e/
│   │   ├── auth.e2e-spec.ts
│   │   ├── users.e2e-spec.ts
│   │   ├── products.e2e-spec.ts
│   │   └── uploads.e2e-spec.ts
│   │
│   ├── mocks/
│   │   ├── user.mock.ts
│   │   ├── product.mock.ts
│   │   └── jwt.mock.ts
│   │
│   └── jest-e2e.json
│
├── docker/
│   ├── postgres/
│   │   └── init.sql
│   │
│   └── rabbitmq/
│       └── definitions.json
│
├── .env
├── .env.example
├── .gitignore
├── .dockerignore
│
├── Dockerfile
├── docker-compose.yml
│
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
│
├── package.json
├── package-lock.json
│
├── README.md
```