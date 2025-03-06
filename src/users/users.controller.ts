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
import { UsersService } from './users.service';

// this is the parent route /users
@Controller('users')
export class UsersController {
  /*
   this constructor is the equivalent of:
   const usersService = new UserService()
   */
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value&age=32
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // static routes need to be before dynamic routes
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    // Unary plus +, converts string to a number similar to parseInt()
    return this.usersService.findOne(+id);
  }

  @Post() // POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  patchOne(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
