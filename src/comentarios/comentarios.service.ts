import { Injectable, NotFoundException } from '@nestjs/common';
import { Comentario } from './comentarios.entity';

@Injectable()
export class ComentariosService {
    private comentarios: Comentario[] = [];

    getComentarios(){
        return this.comentarios;
    }

    postComentarios(comentario: string|undefined, idpost: string|undefined, autor: string|undefined){
        const common = {id: this.comentarios.length+1, comentario, idpost, autor}
        this.comentarios.push(common);
        return common;
    }

    deleteComentario(id: number) {
        const comentarioIndex = this.comentarios.findIndex(comentario => comentario.id === id);
        if (comentarioIndex === -1) {
            throw new NotFoundException('Comentario no encontrado');
        }
        const deletedComentario = this.comentarios.splice(comentarioIndex, 1);
        return deletedComentario;
    }

    updateComentario(id: number, updatedComentario: Partial<Comentario>) {
        const comentarioIndex = this.comentarios.findIndex(comentario => comentario.id === id);
        if (comentarioIndex === -1) {
            throw new NotFoundException('Comentario no encontrado');
        }

        const comentarioToUpdate = this.comentarios[comentarioIndex];

        if (!comentarioToUpdate) {
            throw new NotFoundException('Comentario no encontrado');
        }

        const updatedComentarioObject = {
            ...comentarioToUpdate,
            ...updatedComentario
        };
        this.comentarios[comentarioIndex] = updatedComentarioObject;
        return updatedComentarioObject;
    }
}