import { Type } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CrudOperations } from './CrudOperations';

export function BaseResolver<T extends Type<unknown>, X extends CrudOperations>(
  classRef: T,
): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    private service: X;
    protected constructor(service: X) {
      this.service = service;
    }

    @Query((type) => [classRef], { name: `findAll${classRef.name}` })
    async findAll(): Promise<T[]> {
      return this.service.findAll();
    }
  }

  return BaseResolverHost;
}
