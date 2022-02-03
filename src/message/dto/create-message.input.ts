import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field()
  message: string;

  @Field()
  sender: string;

  @Field({ nullable: true })
  to?: string;
}
