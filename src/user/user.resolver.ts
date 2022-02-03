import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserInput } from './mutation/user.mutation';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Query((returns) => [User])
  async getAllUser() {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  async createUser(@Args('user') user: UserInput) {
    console.log(user);
    return this.userService.addUser(user);
  }
}
