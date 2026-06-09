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

---


# Phase 3: Product Management Module

## Overview

Phase 3 extends the application by introducing a dedicated Product Management module. This phase demonstrates how to build a complete CRUD (Create, Read, Update, Delete) feature in NestJS while following a modular and scalable architecture.

The Product module is designed to manage product-related data and serves as an example of how business entities can be organized into independent modules. It integrates with PostgreSQL through TypeORM and follows the same layered architecture used throughout the application.

---

## Objectives

The primary goals of this phase are:

* Create a dedicated Product entity and database table.
* Implement full CRUD operations for products.
* Protect product endpoints using JWT authentication.
* Apply request validation using DTOs and class-validator.
* Organize business logic using Controller, Service, and Repository layers.
* Demonstrate scalable backend architecture practices.

---

## Product Entity

A Product entity is introduced to represent items managed by the system.

Each product contains:

* Unique identifier
* Product name
* Description
* Price
* Available stock quantity
* Creation timestamp
* Last update timestamp

The entity is mapped to a PostgreSQL table using TypeORM decorators.

---

## Architecture

The Product module follows a layered architecture:

### Controller Layer

Responsible for:

* Receiving HTTP requests
* Validating request data
* Mapping routes to business operations
* Returning responses to clients

### Service Layer

Responsible for:

* Business logic
* Validation and error handling
* Coordinating data operations
* Communicating with the repository layer

### Repository Layer

Responsible for:

* Database interactions
* Query execution
* Data persistence and retrieval

### DTO Layer

Responsible for:

* Request validation
* Data transformation
* Defining API contracts

---

## Implemented Features

### Create Product

Allows authenticated users to create new products by providing:

* Name
* Description
* Price
* Stock quantity

Validation ensures that required fields are present and contain valid values.

---

### Retrieve Products

Provides the ability to:

* Fetch all products
* Retrieve a specific product by ID
* Filter products using query parameters

This enables flexible product searching and browsing.

---

### Update Product

Allows modification of existing product information.

Users can update:

* Product name
* Description
* Price
* Stock quantity

Partial updates are supported to improve usability.

---

### Delete Product

Allows removal of products from the system.

The application verifies product existence before deletion and returns meaningful errors when records are not found.

---

## Authentication Integration

All Product APIs are protected using JWT authentication.

Access to product resources requires a valid access token generated during the authentication phase.

This ensures:

* Secure access to resources
* User identity verification
* Protection against unauthorized requests

---

## Validation and Error Handling

Input validation is implemented using:

* class-validator
* DTO-based validation
* Global validation pipes

The system handles common scenarios such as:

* Invalid product identifiers
* Missing required fields
* Incorrect data types
* Non-existent products

Meaningful error responses are returned to clients.

---

## Database Integration

The Product module integrates with PostgreSQL through TypeORM.

TypeORM provides:

* Entity mapping
* Repository pattern support
* Query generation
* Automatic schema synchronization (during development)

This enables efficient and maintainable database operations.

---

## Learning Outcomes

By completing this phase, the project demonstrates:

* NestJS modular architecture
* TypeORM integration
* Repository pattern implementation
* CRUD API development
* Request validation
* JWT-protected endpoints
* Error handling best practices
* Scalable backend design principles

---

## Result

At the end of Phase 3, the application supports secure product management functionality with complete CRUD operations, validation, authentication, and database integration, providing a strong foundation for future features such as file uploads, third-party integrations, microservices, and advanced business workflows.


---

# Phase 4 – Cloud Storage Integration (Cloudinary File Upload Module)

## Objective

The goal of Phase 4 is to integrate a third-party cloud storage service into the application. This phase demonstrates how a NestJS application can communicate with external services and manage file uploads securely and efficiently.

Cloudinary was selected as the cloud storage provider because it offers scalable media storage, secure asset management, content delivery, and image optimization capabilities. Instead of storing uploaded files on the application server, files are uploaded directly to Cloudinary and made available through secure URLs.

This phase fulfills the assignment requirement of integrating a third-party service into the application.

---

# Features Implemented

## Cloudinary Integration

Cloudinary was configured as an external cloud storage provider using environment-based credentials.

The integration includes:

* Cloudinary SDK configuration
* Secure credential management
* File upload functionality
* External API communication
* Cloud-based asset storage

The application can now upload files directly to Cloudinary and receive metadata about the uploaded resources.

---

## Upload Module

A dedicated Uploads Module was created to encapsulate all file upload functionality.

Responsibilities include:

* Handling file upload requests
* Communicating with Cloudinary
* Managing upload responses
* Organizing upload-related business logic

This modular approach keeps the application maintainable and scalable.

---

## Upload Controller

The Upload Controller exposes REST API endpoints for file uploads.

Responsibilities:

* Receiving multipart form-data requests
* Accepting uploaded files
* Invoking upload services
* Returning upload responses

The controller acts as the entry point for all upload operations.

---

## Upload Service

The Upload Service contains the business logic responsible for file processing and upload orchestration.

Responsibilities:

* Receiving uploaded files
* Calling Cloudinary services
* Processing upload results
* Returning structured responses

The service layer ensures separation of concerns between controllers and external service integrations.

---

## Cloudinary Service

A dedicated Cloudinary Service was implemented to manage communication with Cloudinary APIs.

Responsibilities:

* Configuring Cloudinary SDK
* Uploading files to cloud storage
* Handling Cloudinary responses
* Managing upload errors

This abstraction allows the application to interact with Cloudinary without exposing implementation details to other modules.

---

# File Upload Workflow

The file upload process follows the sequence below:

```text
Client
   ↓
Upload API Endpoint
   ↓
Multer File Processing
   ↓
Uploads Service
   ↓
Cloudinary Service
   ↓
Cloudinary Storage
   ↓
Upload Response
```

Workflow:

1. User sends a multipart/form-data request.
2. NestJS receives the uploaded file.
3. Multer processes the incoming file.
4. Upload Service handles the request.
5. Cloudinary Service uploads the file to Cloudinary.
6. Cloudinary stores the file securely.
7. Cloudinary returns upload metadata.
8. The API returns a structured response containing file information.

---

# Authentication Integration

Upload endpoints are protected using JWT Authentication.

Only authenticated users can upload files to the platform.

Security benefits include:

* Prevention of unauthorized uploads
* Secure access control
* User identity verification
* Consistent authentication across modules

Requests without valid access tokens are rejected.

---

# API Endpoint

The following endpoint was implemented:

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| POST   | /uploads | Upload file to Cloudinary |

Authentication:

```http
Authorization: Bearer <ACCESS_TOKEN>
```

Request Type:

```text
multipart/form-data
```

File Field:

```text
file
```

---

# Upload Response

After a successful upload, the API returns Cloudinary metadata.

Example response:

```json
{
  "publicId": "sample-file-id",
  "url": "https://res.cloudinary.com/..."
}
```

Returned information includes:

* Cloudinary Public ID
* Secure File URL

These values can be stored in the database and later used by frontend applications.

---

# Environment Configuration

Cloudinary credentials are managed using environment variables.

Configuration includes:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Benefits:

* Secure credential storage
* Environment-specific configuration
* Improved deployment flexibility
* Compliance with security best practices

Sensitive information is never hardcoded into the source code.

---

# Error Handling

The upload module includes structured error handling for common failure scenarios.

Handled cases include:

* Missing file uploads
* Invalid requests
* Cloudinary upload failures
* Network communication errors
* External service exceptions

Meaningful error responses are returned to API consumers.

---

# Security Considerations

Several security measures were implemented during this phase:

* JWT-protected endpoints
* Environment-based credentials
* Secure API communication
* Controlled file processing
* Separation of business logic and external integrations

These practices improve overall application security and maintainability.

---

# Benefits of Cloud Storage

Using Cloudinary provides several advantages over local file storage:

* Reduced server storage requirements
* Improved scalability
* Global CDN delivery
* High availability
* Secure media management
* Simplified asset handling

This architecture is commonly used in production-grade applications.

---

# Learning Outcomes

Phase 4 demonstrates the following concepts:

* Third-party API integration
* Cloudinary SDK configuration
* Cloud-based file storage
* NestJS file upload handling
* Multer integration
* Environment variable management
* JWT-protected resources
* Service abstraction patterns
* External service communication
* Secure credential handling

---

# Outcome

At the end of Phase 4, the application supports secure cloud-based file uploads using Cloudinary. Files can be uploaded through authenticated API endpoints, stored in a managed cloud environment, and accessed through secure URLs returned by the application.

This phase successfully fulfills the third-party integration requirement of the assignment and prepares the application for real-world media management scenarios.

---

# Phase 5 – Global Validation & Structured Error Handling

## Objective

The goal of Phase 5 is to improve the reliability, consistency, and security of the application by implementing centralized validation and structured error handling mechanisms.

As the application grows and exposes more APIs, it becomes increasingly important to ensure that incoming requests are properly validated and that errors are returned in a predictable format. This phase establishes a common error-handling strategy that is applied across all modules including Users, Authentication, Products, and Uploads.

The implementation follows NestJS best practices by utilizing global validation pipes, exception filters, interceptors, and standardized API responses.

---

# Features Implemented

## Global Request Validation

The application uses NestJS ValidationPipe globally to validate incoming request data before it reaches business logic.

Responsibilities:

* Validate incoming request payloads
* Remove unexpected properties
* Transform request data into DTO types
* Reject invalid requests automatically

Benefits:

* Prevents malformed requests
* Improves API reliability
* Reduces security risks
* Simplifies controller logic

---

## DTO-Based Validation

Validation rules are defined using Data Transfer Objects (DTOs).

Supported validations include:

* Required field validation
* Email format validation
* String validation
* Numeric validation
* Length constraints
* Optional field validation

This ensures that all API requests follow a predefined structure before processing.

---

# Validation Workflow

```text
Client Request
      ↓
Validation Pipe
      ↓
DTO Validation
      ↓
Valid Request → Controller
      ↓
Invalid Request → Exception Filter
      ↓
Formatted Error Response
```

The validation layer acts as the first line of defense against invalid or malicious input.

---

# Global Exception Handling

A centralized exception handling mechanism was implemented using NestJS Exception Filters.

Responsibilities:

* Capture application exceptions
* Handle unexpected errors
* Format error responses consistently
* Prevent sensitive information leakage

Instead of returning different error structures from various modules, the application now follows a unified error response format.

---

## HTTP Exception Filter

A dedicated HTTP Exception Filter was implemented.

Handles common HTTP exceptions such as:

* Bad Request (400)
* Unauthorized (401)
* Forbidden (403)
* Not Found (404)
* Conflict (409)

The filter converts exceptions into structured API responses.

---

## Database Exception Handling

Database-related exceptions are handled separately to provide meaningful responses.

Examples include:

* Duplicate email addresses
* Unique constraint violations
* Missing records
* Invalid database operations

Benefits:

* Improved user feedback
* Easier debugging
* Better API consumer experience

---

# Structured API Responses

A consistent response structure was introduced across the application.

Successful responses follow a common format.

Example:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

Error responses follow a standardized structure.

Example:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    "Email must be valid"
  ]
}
```

Benefits:

* Consistent API contracts
* Easier frontend integration
* Improved maintainability

---

# Response Interceptors

Response Interceptors were introduced to standardize successful API responses.

Responsibilities:

* Wrap successful responses
* Provide consistent response structures
* Improve API readability
* Centralize response formatting

This ensures that all modules return responses in a predictable format.

---

# Common Error Scenarios Handled

The application now properly handles:

### Validation Errors

Examples:

* Missing required fields
* Invalid email addresses
* Incorrect data types
* Invalid request payloads

---

### Authentication Errors

Examples:

* Missing JWT tokens
* Invalid access tokens
* Expired tokens

---

### Authorization Errors

Examples:

* Insufficient permissions
* Role restrictions
* Protected resource access violations

---

### Resource Errors

Examples:

* User not found
* Product not found
* File not found

---

### Database Errors

Examples:

* Duplicate records
* Constraint violations
* Invalid operations

---

### Upload Errors

Examples:

* Missing files
* Unsupported file types
* Cloudinary upload failures
* External service communication issues

---

# Security Improvements

Phase 5 improves application security through:

* Request sanitization
* Input validation
* Error message control
* Prevention of unexpected payloads
* Reduced exposure of internal application details

Sensitive implementation details are never exposed to API consumers.

---

# Benefits of Centralized Error Handling

Implementing centralized validation and exception management provides:

* Consistent API behavior
* Improved debugging
* Better developer experience
* Simplified maintenance
* Reduced duplicate code
* Enhanced application reliability

---

# Learning Outcomes

Phase 5 demonstrates the following concepts:

* Global ValidationPipe configuration
* DTO validation strategies
* Exception Filters
* Response Interceptors
* Structured API design
* Centralized error handling
* Security-focused validation
* Consistent response formatting
* NestJS middleware architecture

---

# Testing Performed

The following scenarios were verified:

* Invalid request payloads
* Missing required fields
* Invalid email formats
* Unauthorized access attempts
* Forbidden resource access
* Missing resources
* Database constraint violations
* Cloudinary upload failures
* Structured response formatting

---

# Outcome

At the end of Phase 5, the application provides centralized validation, consistent API responses, and structured error handling across all modules.

The system is now more secure, maintainable, and production-ready, ensuring that clients receive predictable responses while reducing the complexity of error management throughout the application.

---

# Phase 6 – RabbitMQ Microservice & Notification System

## Objective

The goal of Phase 6 is to introduce asynchronous communication and microservice architecture into the application using RabbitMQ and NestJS Microservices.

Up to this point, all modules communicate directly through HTTP requests and service calls. In real-world applications, many operations such as notifications, emails, logging, analytics, and background processing should not block the main request-response cycle.

This phase demonstrates how to decouple services using a message broker and event-driven architecture. RabbitMQ is used as the messaging system to exchange events between the main application and a dedicated notification microservice.

The implementation fulfills the assignment requirement of creating a lightweight microservice using RabbitMQ.

---

# Features Implemented

## RabbitMQ Integration

RabbitMQ was integrated as the application's message broker.

Responsibilities:

* Message routing
* Event publishing
* Event consumption
* Service decoupling
* Reliable message delivery

The application can now send and receive events asynchronously without requiring direct communication between modules.

---

## RabbitMQ Module

A dedicated RabbitMQ Module was created to encapsulate messaging functionality.

Responsibilities:

* RabbitMQ connection management
* Producer configuration
* Consumer registration
* Queue management
* Message publishing

This module acts as the communication layer between application services and RabbitMQ.

---

## Event-Driven Architecture

The application now follows an event-driven communication model.

Instead of:

```text
Application
     ↓
Direct Service Call
     ↓
Notification Service
```

The system uses:

```text
Application
     ↓
RabbitMQ Producer
     ↓
RabbitMQ Queue
     ↓
RabbitMQ Consumer
     ↓
Notification Microservice
```

This architecture improves scalability and system flexibility.

---

## Notification Module

A dedicated Notification Module was introduced.

Responsibilities:

* Receiving notification events
* Processing incoming messages
* Executing notification logic
* Logging notification activity

The notification system acts as an independent business component that reacts to events published by the main application.

---

## Message Producer

A RabbitMQ Producer was implemented to publish events to queues.

Responsibilities:

* Create notification events
* Send messages to RabbitMQ
* Trigger asynchronous workflows

Example events:

* User Registered
* Product Created
* File Uploaded
* User Updated

The producer allows the main application to emit events without waiting for additional processing.

---

## Message Consumer

A RabbitMQ Consumer was implemented to listen for incoming events.

Responsibilities:

* Receive queue messages
* Deserialize payloads
* Process business events
* Trigger notification actions

The consumer automatically reacts whenever new events are published.

---

# Notification Workflow

The notification process follows the sequence below:

```text
User Action
     ↓
Application Service
     ↓
RabbitMQ Producer
     ↓
RabbitMQ Queue
     ↓
RabbitMQ Consumer
     ↓
Notification Service
     ↓
Notification Processed
```

Example:

1. User registration completed.
2. Registration event published.
3. RabbitMQ stores event.
4. Consumer receives event.
5. Notification service processes message.
6. Notification logged successfully.

---

# Microservice Implementation

A dedicated Notification Microservice was created using NestJS Microservices.

Responsibilities:

* Independent event processing
* Queue subscription
* Background task execution
* Notification handling

The microservice operates independently from the main application while remaining connected through RabbitMQ.

---

## Queue Configuration

RabbitMQ queues were configured for event processing.

Example queue:

```text
notifications_queue
```

Purpose:

* Store notification events
* Ensure reliable delivery
* Support asynchronous processing

---

# Event Payload Structure

Messages exchanged between services follow a consistent structure.

Example:

```json
{
  "event": "USER_REGISTERED",
  "userId": 1,
  "email": "user@example.com"
}
```

Benefits:

* Predictable communication
* Easier debugging
* Consistent event contracts

---

# Error Handling

The messaging layer includes structured error handling.

Handled scenarios include:

* RabbitMQ connection failures
* Queue availability issues
* Invalid message payloads
* Consumer processing failures
* Unexpected microservice exceptions

This improves system reliability and resilience.

---

# Benefits of Asynchronous Processing

Introducing RabbitMQ provides several advantages:

* Improved scalability
* Reduced request latency
* Service decoupling
* Background processing support
* Fault isolation
* Better maintainability

These are common patterns used in enterprise-grade distributed systems.

---

# Security Considerations

The messaging infrastructure was configured with security best practices.

Measures include:

* Environment-based configuration
* Controlled queue access
* Internal service communication
* Structured message validation

Sensitive information is never exposed through queue messages.

---

# Learning Outcomes

Phase 6 demonstrates the following concepts:

* Microservice Architecture
* Event-Driven Design
* RabbitMQ Integration
* Message Queues
* Producers and Consumers
* Asynchronous Communication
* Background Processing
* NestJS Microservices
* Distributed System Fundamentals
* Service Decoupling

---

# Testing Performed

The following scenarios were verified:

* RabbitMQ connection established
* Queue creation successful
* Event publishing successful
* Event consumption successful
* Notification processing successful
* Invalid message handling
* Consumer error recovery
* Microservice communication verified

---

# Outcome

At the end of Phase 6, the application supports asynchronous event-driven communication using RabbitMQ and NestJS Microservices.

The system can publish events, process messages through queues, and execute notification workflows independently of the main application. This introduces a scalable microservice architecture and fulfills the messaging and microservice requirements of the assignment.

---

# Phase 7 – Testing (Unit Testing & End-to-End Testing)

## Objective

The goal of Phase 7 is to ensure the reliability, stability, and correctness of the application through automated testing.

As the application grows and includes multiple modules such as Users, Authentication, Products, Uploads, and RabbitMQ Notifications, manual testing becomes insufficient. Automated testing helps verify that individual components work correctly and that the entire application behaves as expected when handling real HTTP requests.

This phase fulfills the assignment requirement of implementing both Unit Tests and End-to-End (E2E) Tests using Jest and Supertest.

---

# Features Implemented

## Unit Testing

Unit testing focuses on testing individual components in isolation.

The primary objective is to verify that services, controllers, and business logic behave correctly without relying on external systems such as databases, RabbitMQ, or Cloudinary.

Responsibilities:

* Validate business logic
* Verify service behavior
* Test error handling
* Ensure predictable outputs
* Improve code quality

---

## End-to-End Testing

End-to-End (E2E) testing verifies the complete application workflow.

These tests simulate real HTTP requests and validate how multiple components interact together.

Responsibilities:

* Test API endpoints
* Verify request validation
* Validate authentication flows
* Test database interactions
* Confirm response structures

---

# Testing Frameworks

The application uses the following testing tools:

## Jest

Jest serves as the primary testing framework.

Capabilities:

* Unit testing
* Mocking dependencies
* Assertions
* Test coverage reporting

Benefits:

* Fast execution
* TypeScript support
* Rich testing ecosystem

---

## Supertest

Supertest is used for End-to-End API testing.

Capabilities:

* HTTP request simulation
* API response verification
* Authentication testing
* Integration validation

Benefits:

* Realistic API testing
* Easy request creation
* Seamless NestJS integration

---

# Unit Tests Implemented

The following modules include unit tests:

## Users Service

Tests:

* Create user
* Retrieve users
* Find user by ID
* Update user
* Delete user
* Handle missing users
* Prevent duplicate emails

---

## Authentication Service

Tests:

* User registration
* User login
* Password validation
* JWT token generation
* Invalid credential handling

---

## Products Service

Tests:

* Product creation
* Product retrieval
* Product updates
* Product deletion
* Product validation

---

## Uploads Service

Tests:

* File upload processing
* Cloudinary integration mocking
* Upload response handling
* Error handling

---

## Notifications Service

Tests:

* Event publishing
* RabbitMQ integration mocking
* Notification processing
* Error handling

---

# Mocking Strategy

External dependencies are mocked to ensure tests remain isolated.

Examples:

* TypeORM repositories
* JWT services
* Cloudinary services
* RabbitMQ producers
* External API calls

Benefits:

* Faster execution
* Reliable test results
* No dependency on external systems

---

# End-to-End Tests Implemented

The following API workflows are tested:

## Authentication APIs

Endpoints:

* POST /auth/register
* POST /auth/login

Scenarios:

* Successful registration
* Duplicate email handling
* Successful login
* Invalid credentials

---

## Users APIs

Endpoints:

* POST /users
* GET /users
* GET /users/:id
* PATCH /users/:id
* DELETE /users/:id

Scenarios:

* CRUD operations
* Validation errors
* Missing resource handling

---

## Products APIs

Endpoints:

* POST /products
* GET /products
* GET /products/:id
* PATCH /products/:id
* DELETE /products/:id

Scenarios:

* Product CRUD
* Authentication validation
* Error handling

---

## Upload APIs

Endpoints:

* POST /uploads

Scenarios:

* Successful upload
* Missing file handling
* Authentication verification
* Cloudinary response validation

---

## Notification APIs

Endpoints:

* POST /notifications

Scenarios:

* Event publishing
* Queue interaction
* Validation handling

---

# Test Structure

```text
test/
│
├── unit/
│   ├── auth.service.spec.ts
│   ├── users.service.spec.ts
│   ├── products.service.spec.ts
│   ├── uploads.service.spec.ts
│   └── notifications.service.spec.ts
│
├── e2e/
│   ├── auth.e2e-spec.ts
│   ├── users.e2e-spec.ts
│   ├── products.e2e-spec.ts
│   ├── uploads.e2e-spec.ts
│   └── notifications.e2e-spec.ts
│
├── mocks/
│   ├── user.mock.ts
│   ├── product.mock.ts
│   ├── jwt.mock.ts
│   └── notification.mock.ts
│
└── jest-e2e.json
```

---

# Running Tests

Run all tests:

```bash
npm test
```

Run unit tests:

```bash
npm run test:watch
```

Run E2E tests:

```bash
npm run test:e2e
```

Run coverage report:

```bash
npm run test:cov
```

---

# Code Coverage

Coverage reporting is enabled through Jest.

Metrics include:

* Statements Coverage
* Branch Coverage
* Function Coverage
* Line Coverage

Benefits:

* Identify untested code
* Improve reliability
* Maintain quality standards

---

# Benefits of Automated Testing

Implementing automated testing provides:

* Improved reliability
* Faster bug detection
* Safer refactoring
* Better maintainability
* Higher code quality
* Increased deployment confidence

---

# Learning Outcomes

Phase 7 demonstrates the following concepts:

* Unit Testing
* End-to-End Testing
* Jest Framework
* Supertest Integration
* Mocking Strategies
* Dependency Isolation
* API Validation Testing
* Authentication Testing
* Integration Testing
* Test Coverage Analysis

---

# Testing Performed

The following scenarios were verified:

* Successful API operations
* Validation failures
* Authentication failures
* Authorization restrictions
* Database interactions
* Cloudinary integration
* RabbitMQ event publishing
* Structured response validation
* Error handling workflows

---

# Outcome

At the end of Phase 7, the application contains a comprehensive automated testing suite covering both business logic and API workflows.

The system can now be validated automatically through unit tests and end-to-end tests, ensuring reliability, maintainability, and production readiness while fulfilling the testing requirements of the assignment.

---

