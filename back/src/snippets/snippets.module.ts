import { Module } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { SnippetsController } from './snippets.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Features} from '../features/features.entity'
import {Snippet} from './entities/snippet.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Snippet ])],
  exports: [TypeOrmModule],
  controllers: [SnippetsController],
  providers: [SnippetsService],
})
export class SnippetsModule {}
