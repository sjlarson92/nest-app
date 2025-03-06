import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Luigi',
      email: 'luigi@example.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Daisy',
      email: 'daisy@example.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Mario',
      email: 'mario@example.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Princess Peach',
      email: 'john@example.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Bowser',
      email: 'bowser@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0) {
        throw new NotFoundException('User Role not found');
      } else {
        return rolesArray;
      }
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    } else {
      return user;
    }
  }

  create(user: CreateUserDto) {
    const newUser = {
      id: 6,
      ...user,
    };
    this.users.push(newUser);
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      } else {
        return user;
      }
    });

    return this.findOne(id);
  }

  delete(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
