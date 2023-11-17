import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feature } from '../features/types/feature.entity';
import { Repository } from 'typeorm';
import { Language } from './entities/language.entity';
import {RelationUtils} from '../utils/relationUtils'

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageRepository.save(createLanguageDto);
  }

  findAll() {
    return this.languageRepository.find(
      RelationUtils.load<Language>('categories'),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
