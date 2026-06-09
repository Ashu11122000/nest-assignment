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

---

# Phase 0 – Project Foundation & Environment Setup

## Objective

The goal of Phase 0 is to establish the foundational infrastructure for the NestJS application before implementing any business logic. This phase focuses on project initialization, environment configuration, database connectivity, validation setup, and application architecture preparation.

---

# Project Initialization

A new NestJS project was created using the Nest CLI.

```bash
nest new nest-assignment
```

This generated the default NestJS application structure and configured TypeScript support.

---

# Core Dependencies Installed

## Configuration Management

```bash
npm install @nestjs/config
```

Purpose:

* Environment variable management
* Centralized configuration
* Runtime configuration loading

---

## Database Integration

```bash
npm install @nestjs/typeorm typeorm pg
```

Purpose:

* PostgreSQL database integration
* ORM support using TypeORM
* Repository pattern implementation
* Entity management

---

## Validation

```bash
npm install class-validator class-transformer
```

Purpose:

* Request payload validation
* DTO transformation
* Automatic request sanitization

---

# PostgreSQL Setup

PostgreSQL was installed locally and configured for development.

Database created:

```sql
CREATE DATABASE nest_assignment;
```

Verification:

```sql
\l
```

Expected output includes:

```text
nest_assignment
```

---

# Environment Configuration

A `.env` file was created to store application configuration values.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=********
DB_NAME=nest_assignment
```

Purpose:

* Separate configuration from source code
* Environment-specific settings
* Secure credentials management

---

# Configuration Module Setup

A dedicated configuration layer was implemented.

## configuration.ts

Responsible for exposing application-level configuration.

```text
src/config/configuration.ts
```

Responsibilities:

* Load environment variables
* Provide typed configuration values
* Centralize configuration access

---

## database.config.ts

Responsible for database configuration.

```text
src/config/database.config.ts
```

Responsibilities:

* PostgreSQL connection settings
* TypeORM configuration
* Entity discovery
* Synchronization settings

---

# Database Layer Setup

A dedicated database directory was created.

```text
src/database/
```

Contains:

```text
data-source.ts
```

Purpose:

* TypeORM DataSource configuration
* Migration support
* Future seeding support
* CLI integration

---

# Global Validation Configuration

NestJS ValidationPipe was configured globally.

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
);
```

Purpose:

### whitelist

Removes unknown properties.

Example:

```json
{
  "name": "Ashish",
  "randomField": "remove me"
}
```

Result:

```json
{
  "name": "Ashish"
}
```

---

### transform

Automatically converts request values into DTO types.

Example:

```json
{
  "id": "1"
}
```

Result:

```ts
id: number
```

---

### forbidNonWhitelisted

Rejects unexpected fields.

Example:

```json
{
  "name": "Ashish",
  "hackField": "invalid"
}
```

Returns:

```http
400 Bad Request
```

---

# Application Module Configuration

The root module was configured with:

* ConfigModule
* TypeOrmModule

Responsibilities:

```text
AppModule
│
├── ConfigModule
│
└── TypeOrmModule
```

This establishes:

* Global configuration access
* Database connectivity
* Application-wide dependency injection

---

# Current Project Structure

```text
src/
│
├── main.ts
├── app.module.ts
│
├── config/
│   ├── configuration.ts
│   └── database.config.ts
│
└── database/
    └── data-source.ts
```

---

# Verification Checklist

The following items were successfully completed:

* NestJS project initialized
* PostgreSQL installed
* PostgreSQL server running
* Database created
* Environment variables configured
* ConfigModule configured globally
* TypeORM configured
* ValidationPipe configured globally
* DataSource created
* Application bootstraps successfully
* Database connection established

---

# Outcome

At the end of Phase 0, the application has a production-ready foundation with:

* Modular architecture
* PostgreSQL connectivity
* Centralized configuration
* Validation infrastructure
* TypeORM integration
* Environment management

The project is now ready for Phase 1: Users CRUD Module implementation.

---

