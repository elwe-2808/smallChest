import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Features} from './features/features.entity'
import { SnippetsModule } from './snippets/snippets.module';
import {FeaturesModule} from './features/features.module'

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
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
