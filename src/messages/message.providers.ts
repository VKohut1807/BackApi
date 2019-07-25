import { Connection } from 'mongoose';
import { MessageSchema } from '../database/message.schema';

export const messsageProviders = [
  {
    provide: 'MESS_MODEL',
    useFactory: (connection: Connection) => connection.model('Message', MessageSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];