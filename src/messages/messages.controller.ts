import { Controller, Get, Param, Body, Post, Query, Delete, Put } from '@nestjs/common';
import { MessagesService } from './messages.service' ;
import { CreateMessDTO } from './dto/createMess.dto' ;

@Controller('api/messages')
export class MessagesController {
    constructor(private messService: MessagesService) {}

    @Get()
    async getMessages() {
        const messages = await this.messService.findAll() ;
        return messages;
    }
    @Get(':messID')
    async getMess(@Param('messID') messID) {
        const message = await this.messService.getMess(messID);
        return message;
    }
    @Post()
    async addMess(@Body() createMessDTO: CreateMessDTO) {
        const message = await this.messService.create(createMessDTO) ;
        return message;
    }

    @Put(':messID')
    async updateMess(@Param('messID') messID, @Body() updMessDTO: CreateMessDTO) {
        const mess = await this.messService.update(messID, updMessDTO);
        return mess;
    }

    @Delete(':messID')
    async deleteMess(@Param('messID') messID){
        const mess = await this.messService.delete(messID);
        return mess;
    }
}
