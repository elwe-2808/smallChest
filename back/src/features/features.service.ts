import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feature } from './types/feature.entity';

@Injectable()
export class FeaturesService {
  constructor(
    @InjectRepository(Feature) private featureRepository: Repository<Feature>,
  ) {}

  findAll(): Promise<Feature[]> {
    return this.featureRepository.find();
  }

  findById(id: number): Promise<Feature> {
    return this.featureRepository.findOne({
      where: { id }
    });
  }
}
