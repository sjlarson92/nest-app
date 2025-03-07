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

# Add Resouce (generates folder with controller, service, module, dto and entities all at once)
nest g resource $resource-name

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