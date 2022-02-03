import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field({ defaultValue: Math.floor(Math.random() * 100) })
  id: number;
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
