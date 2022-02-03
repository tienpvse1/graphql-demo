import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      firstName: 'jon',
      lastName: 'doe',
    },
    {
      id: 2,
      firstName: 'jane',
      lastName: 'doe',
    },
    {
      id: 3,
      firstName: 'mike',
      lastName: 'dont know',
    },
  ];

  findById(id: number) {
    return this.users.filter((item) => item.id === id)[0];
  }

  findAll() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    return user;
  }
}
