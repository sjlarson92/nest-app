import { Injectable } from '@nestjs/common';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const newUser = {
      id: 6,
      ...user,
    };
    this.users.push(newUser);
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
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
