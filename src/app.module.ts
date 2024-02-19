import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module'; // Importa el módulo de posts
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [PostsModule, ComentariosModule], // Importa el módulo de posts
})
export class AppModule {}