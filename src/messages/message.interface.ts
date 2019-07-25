import { Document } from 'mongoose';

export interface Message extends Document {
    readonly _id: any;
    readonly message: string;
}
