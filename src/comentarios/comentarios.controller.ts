import { Body, Controller, Get, Post, Delete, Put, Param, NotFoundException } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComenarioDto } from './dto/comentario.dto';

@Controller('comentarios')
export class ComentariosController {
    constructor(private comentariosService: ComentariosService){};

    @Get()
    getComentarios(){
        return this.comentariosService.getComentarios();
    }

    @Post()
    postComentarios(@Body() newComentario:CreateComenarioDto){
        return this.comentariosService.postComentarios(newComentario.comentario, newComentario.idpost, newComentario.autor);
    }

    @Delete(':id')
    deleteComentario(@Param('id') id: string) {
        try {
            return this.comentariosService.deleteComentario(+id);
        } catch (error) {
            throw new NotFoundException();
        }
    }

    @Put(':id')
    async updateComentario(@Param('id') id: string, @Body() updatedComentario: CreateComenarioDto) {
        try {
            return await this.comentariosService.updateComentario(+id, updatedComentario);
        } catch (error) {
            throw new NotFoundException();
        }
    }
}