import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { messsageProviders } from './message.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule] ,
  controllers: [MessagesController],
  providers: [MessagesService,
            ...messsageProviders],
})
export class MessagesModule {}
