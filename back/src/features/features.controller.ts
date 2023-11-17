import { Controller, Get } from '@nestjs/common';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featureService: FeaturesService) {}

  @Get()
  async findAll() {
    return this.featureService.findAll();
  }
}
