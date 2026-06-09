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
