import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// this is the parent route /users
@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value&age=32
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // static routes need to be before dynamic routes
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: { name: string }) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  patchOne(@Param('id') id: string, @Body() userUpdate: { name: string }) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
