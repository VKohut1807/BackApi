import { Model } from 'mongoose';
import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Message } from './message.interface';
import { CreateMessDTO } from './dto/createMess.dto';

@Injectable()
export class MessagesService {
    constructor(@Inject('MESS_MODEL') private readonly messModel: Model<Message> ) {}

    async findAll(): Promise<Message[]> {
        return await this.messModel.find().exec();
      }

    async create(createMessDto: CreateMessDTO): Promise<Message> {
        const createdMessage = new this.messModel(createMessDto);
        return await createdMessage.save();
      }
    async getMess(messID): Promise<Message> {
      let id = Number(messID) ;
      return new Promise(resolve => {
        const mess = this.messModel.findById(messID).exec() ;
        if (!mess) {
          throw new HttpException('Message does not exist!', 404);
        }
        resolve(mess) ;
      });
    }

    async update(messID, createMessDTO:CreateMessDTO): Promise<Message> {
      return new Promise(resolve => {
        const mess = this.messModel.findByIdAndUpdate(messID, createMessDTO, {new: true});
        if (!mess) {
          throw new HttpException('Message does not exist!', 404);
        }
        resolve(mess);
      });
    }

    async delete(messID): Promise<Message> {
      return new Promise(resolve => {
        const mess = this.messModel.findByIdAndRemove(messID).exec() ;
        if (!mess) {
          throw new HttpException('Message does not exist!', 404);
        }
        resolve(mess) ;
      });
    }
}
