import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { SnippetsModule } from './snippets/snippets.module';
import {FeaturesModule} from './features/features.module'

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      }),
      SnippetsModule,
      FeaturesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
