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

# Phase 1 – Users CRUD Module

## Objective

The goal of Phase 1 is to implement a complete User Management module following NestJS best practices. This phase establishes the application's first business module and introduces database-driven CRUD operations using PostgreSQL and TypeORM.

The Users Module serves as the foundation for future features such as Authentication, Authorization, Role-Based Access Control (RBAC), Testing, and Microservices.

---

# Features Implemented

## User Entity

A User entity was created and mapped to the PostgreSQL database using TypeORM.

The entity is responsible for representing user records and defining the database schema.

### User Information

Each user contains:

* ID
* First Name
* Last Name
* Email Address
* Phone Number
* Created Timestamp
* Updated Timestamp

---

## Users Module

A dedicated Users Module was created following NestJS modular architecture.

Responsibilities:

* User management
* User data persistence
* User validation
* CRUD operations
* Future authentication integration

---

## Data Transfer Objects (DTOs)

DTOs were implemented to validate incoming requests and maintain data consistency.

### Create User DTO

Used when creating a new user.

Validates:

* First Name
* Last Name
* Email
* Phone Number

---

### Update User DTO

Used for partial updates.

Allows updating:

* First Name
* Last Name
* Email
* Phone Number

---

### Query User DTO

Used for filtering and searching users.

Supports:

* First Name filtering
* Last Name filtering
* Email filtering

---

# Repository Layer

A custom repository layer was implemented to separate database access from business logic.

Responsibilities:

* User creation
* User retrieval
* User updates
* User deletion
* Email lookup
* User filtering

Benefits:

* Cleaner architecture
* Better maintainability
* Easier testing
* Separation of concerns

---

# Service Layer

The Users Service contains all business logic.

Responsibilities:

### Create User

* Creates new users
* Validates email uniqueness
* Saves users to PostgreSQL

### Get Users

* Retrieves all users
* Supports filtering and searching

### Get User By ID

* Fetches a specific user
* Returns proper errors when user does not exist

### Update User

* Updates existing user information
* Prevents duplicate email addresses

### Delete User

* Removes users from the database

---

# Controller Layer

REST APIs were exposed through the Users Controller.

Implemented endpoints:

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | /users     | Create User    |
| GET    | /users     | Get All Users  |
| GET    | /users/:id | Get User By ID |
| PATCH  | /users/:id | Update User    |
| DELETE | /users/:id | Delete User    |

---

# Validation

Global validation configured in Phase 0 is utilized throughout the Users Module.

Validation features:

* Required field validation
* Email format validation
* Type transformation
* Unknown property rejection
* Request sanitization

---

# Error Handling

Structured exception handling was implemented.

### Bad Request (400)

Returned when:

* Invalid payload is sent
* Validation fails

### Not Found (404)

Returned when:

* Requested user does not exist

### Conflict (409)

Returned when:

* Email already exists

---

# Database Integration

The Users Module is fully integrated with PostgreSQL through TypeORM.

Capabilities:

* Automatic entity mapping
* Repository pattern
* Database persistence
* Query filtering
* Record updates
* Record deletion

---

# Search & Filtering

Basic filtering support was implemented.

Supported filters:

* First Name
* Last Name
* Email

Example use cases:

* Search users by name
* Search users by email
* Filter specific user groups

---

# Testing Performed

The following scenarios were verified:

* User creation
* User retrieval
* User updates
* User deletion
* Validation errors
* Duplicate email prevention
* Non-existent user handling
* Database persistence

---

# Learning Outcomes

Phase 1 introduced the following concepts:

* NestJS Modules
* Controllers
* Services
* DTOs
* Entity Design
* Repository Pattern
* PostgreSQL Integration
* TypeORM Operations
* Validation
* Exception Handling
* CRUD Architecture

---

# Outcome

At the end of Phase 1, the application contains a fully functional Users Management system backed by PostgreSQL and TypeORM.

The project now has a solid domain layer that can be used as the foundation for authentication, authorization, testing, third-party integrations, and microservice communication.

---

# Phase 2 – Authentication & Authorization (JWT + Passport + RBAC Foundation)

## Objective

The goal of Phase 2 is to implement a secure authentication and authorization system for the application using JWT (JSON Web Tokens), Passport.js, bcrypt password hashing, and Role-Based Access Control (RBAC).

This phase builds on the Users Module developed in Phase 1 and introduces user identity management, secure login mechanisms, protected routes, and authorization controls that will be used throughout the remainder of the project.

---

# Features Implemented

## Authentication Module

A dedicated Authentication Module was created to handle all authentication-related operations.

Responsibilities:

* User registration
* User login
* Password hashing
* JWT token generation
* User validation
* Authentication strategies
* Authorization foundation

---

# User Entity Enhancements

The User entity was extended to support authentication and authorization.

Additional fields introduced:

* Password
* Role

### Password

Stores a securely hashed version of the user's password using bcrypt.

Benefits:

* Prevents storage of plain-text passwords
* Improves application security
* Follows industry-standard authentication practices

### Role

Defines the authorization level of the user.

Supported roles:

* ADMIN
* USER

Default role:

```text
USER
```

---

# Authentication DTOs

DTOs were created to validate authentication requests.

## Register DTO

Used during user registration.

Validates:

* First Name
* Last Name
* Email
* Phone Number
* Password

Purpose:

* Ensures valid registration requests
* Prevents invalid user creation

---

## Login DTO

Used during user login.

Validates:

* Email Address
* Password

Purpose:

* Ensures proper authentication requests
* Standardizes login payload structure

---

## Refresh Token DTO

Prepared for future token refresh implementation.

Validates:

* Refresh Token

Purpose:

* Future access token renewal support
* Improved session management

---

# Password Security

bcrypt was integrated to securely hash user passwords before storing them in the database.

Authentication flow:

```text
User Password
      ↓
bcrypt Hashing
      ↓
Database Storage
```

Example:

```text
Input Password:
Ashu123@

Stored Value:
$2b$10$...
```

Benefits:

* Secure password storage
* Protection against database leaks
* Industry-standard password security

---

# JWT Authentication

JSON Web Tokens (JWT) were implemented for stateless authentication.

After successful login:

```text
User Login
      ↓
Credentials Validation
      ↓
JWT Generation
      ↓
Access Token Returned
```

Example response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

# JWT Payload

Each generated token contains:

```json
{
  "sub": 1,
  "email": "user@example.com",
  "role": "USER"
}
```

Payload fields:

| Field | Description |
| ----- | ----------- |
| sub   | User ID     |
| email | User Email  |
| role  | User Role   |

---

# Passport Integration

Passport.js was integrated as the authentication middleware.

Implemented strategies:

## JWT Strategy

Responsible for:

* Extracting JWT from requests
* Validating token authenticity
* Decoding payload information
* Attaching authenticated user data to requests

Authentication flow:

```text
Request
   ↓
Bearer Token
   ↓
JWT Strategy
   ↓
Token Validation
   ↓
Request User Attached
```

---

## Local Strategy

Responsible for:

* Processing login credentials
* Validating email and password
* Authenticating users before token generation

Authentication flow:

```text
Email + Password
       ↓
Local Strategy
       ↓
User Validation
       ↓
Authentication Success
```

---

# Authentication Endpoints

The following APIs were introduced:

| Method | Endpoint       | Description                |
| ------ | -------------- | -------------------------- |
| POST   | /auth/register | Register New User          |
| POST   | /auth/login    | Authenticate User          |
| POST   | /auth/refresh  | Refresh Token (Foundation) |

---

# JWT Guard

A JWT Authentication Guard was implemented.

Responsibilities:

* Protect private routes
* Verify JWT tokens
* Reject unauthorized requests

Example:

```http
Authorization: Bearer TOKEN
```

Without token:

```http
401 Unauthorized
```

---

# Authorization (RBAC Foundation)

Role-Based Access Control (RBAC) was introduced to support authorization throughout the application.

Supported roles:

```text
ADMIN
USER
```

Purpose:

* Restrict sensitive operations
* Protect administrative endpoints
* Support scalable permission management

---

# Roles Decorator

A custom Roles Decorator was implemented.

Purpose:

* Declare required roles for endpoints
* Simplify authorization logic

Example:

```text
ADMIN ONLY
```

---

# Roles Guard

A dedicated Roles Guard was implemented.

Responsibilities:

* Read required roles
* Compare user permissions
* Grant or deny access

Authorization flow:

```text
Request
   ↓
JWT Validation
   ↓
Role Validation
   ↓
Access Granted / Denied
```

---

# Protected Routes

Application endpoints can now be protected using authentication and authorization guards.

Examples:

Protected:

```text
GET /users
GET /users/:id
PATCH /users/:id
DELETE /users/:id
```

Public:

```text
POST /auth/register
POST /auth/login
```

---

# Environment Configuration

Additional environment variables were introduced.

```env
JWT_SECRET=my_super_secret_key
JWT_EXPIRES_IN=1d
```

Purpose:

* Token signing
* Token validation
* Token expiration management

---

# Security Improvements

Phase 2 significantly improved application security through:

* Password hashing
* JWT authentication
* Protected routes
* Role-based authorization
* Secure credential validation
* Stateless authentication

---

# Testing Performed

The following authentication scenarios were verified:

### Registration

* New user registration
* Duplicate email prevention
* Request validation

### Login

* Valid credential authentication
* JWT generation
* Invalid credential rejection

### JWT Authentication

* Access with valid token
* Rejection of invalid tokens
* Rejection of expired tokens

### Authorization

* User role validation
* Access restriction enforcement
* Unauthorized access prevention

---

# Learning Outcomes

Phase 2 introduced the following concepts:

* Authentication Architecture
* Authorization Architecture
* JWT Authentication
* Passport Strategies
* Password Hashing
* bcrypt
* JWT Guards
* Local Authentication
* Role-Based Access Control (RBAC)
* Custom Decorators
* Custom Guards
* Secure API Design

---

# Outcome

At the end of Phase 2, the application contains a fully functional authentication and authorization system built using NestJS, Passport, JWT, and bcrypt.

Users can securely register, authenticate, receive access tokens, and access protected resources based on their assigned roles.

The application is now ready for **Phase 3 – Products CRUD Module with Authentication & Authorization Integration**, where authenticated users and role-based permissions will be applied to business resources.

