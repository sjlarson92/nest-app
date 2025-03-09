## Nest-App

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode (server keeps running and detects changes)
$ npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nest App Terminal Commands

```bash
# Install Nest
npm i -g @nestjs/cli  

# Create Nest App
nest new $project-name 

# Add module
nest g module $module-name

# Add Controller
nest g controller $controller-name

# Add Service (also known as Provider)
nest g service $service-name

# Add Dependencies

#this adds mapped-types which gives us access to PartialType
npm i @nestjs/mapped-types -D

# this gives access to a library that has decorators that add validation to our dtos
npm i class-validator class-transformer

# add prisma dependency
npm i prisma -D

# create prisma schema
npx prisma init

# Add Prisma plugin to IDE if not already installed

# Add Resource (generates folder with controller, service, module, dto and entities all at once)
nest g resource $resource-name

# this adds a dependency that adds rate limiting 
# (preventative to fight against brute force attacks)
# which is added to app.module.ts
npm i @nestjs/throttler

```

## Nest Concepts

### Providers

- Services, Repositories, Factories, Helpers, etc.
- A provider can be injected as a dependency

### Pipes

- Pipes have 2 use cases: transformation and validation
- ParseIntPipe will validate that a value is a number and also parse it into one if able

### Error Handling

- Nest has some built-in HTTP Exceptions (similar to Spring Boot)
    - BadRequestException, UnauthorizedException, NotFoundException etc.

### Neon DB & Prisma

- Create db project in Neon account https://neon.tech
- Get connection string for Prisma (the ORM this project is using) and set db connection string in .env file which
  should have generated from the `npx prisma init` command
- Create models in schema.primsa file
- Run migration to generate tables `npx prisma migrate dev --name init`
- After any changes to models run `npx prisma generate` and then the migration
  `npx prisma migrate dev --name model_change`

### Local PostgreSQL & Prisma

- When setting locally it's important to ensure the user has 
  the correct permission otherwise migrations will not run
  properly

```psql
# Create the user with appropriate privileges:
CREATE USER your_user WITH PASSWORD 'your_password';

# Grant the necessary roles:
ALTER USER your_user WITH CREATEDB;

# Create the database with the user as the owner:
CREATE DATABASE your_database_name OWNER your_user;

# Connect to the database and set up schema permissions:
\c your_database_name
GRANT ALL PRIVILEGES ON SCHEMA public TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO your_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO your_user;

# Add Database connection string to .env file that Prisma generated
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Add Data source to schema.prisma file
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

```

- If there are existing migration that you want to run without creating new ones
`npx prisma migrate deploy`

### Throttler

- Adds a dependency that adds rate limiting
- (preventative to fight against brute force attacks)
- which is added to app.module.ts
