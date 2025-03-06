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