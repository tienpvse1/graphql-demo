import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field()
  message: string;
  @Field()
  sender: string;

  @Field({ nullable: true })
  to?: string;
}
