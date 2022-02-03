import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateMessageInput } from './dto/create-message.input';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';

const pubSub = new PubSub();
@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Subscription(() => Message, {
    name: 'messageSended',
    filter: (payload: any, variable: any) => {
      console.log(
        '🚀 ~ file: message.resolver.ts ~ line 15 ~ MessageResolver ~ @Subscription ~ payload',
        payload,
      );
      return payload.messageSended.to === variable.myIp;
    },
  })
  addCommentHandler(@Args('myIp') myIp: string) {
    return pubSub.asyncIterator('messageSended');
  }

  @Mutation(() => Message)
  createMessage(@Args('createMessageInput') messageInput: CreateMessageInput) {
    pubSub.publish('messageSended', { messageSended: messageInput });
    return this.messageService.create(messageInput);
  }
}
