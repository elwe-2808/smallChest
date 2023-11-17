import {Language} from '../entities/language.entity'

export class CreateLanguageDto implements Partial<Language> {
  name: string;
}
