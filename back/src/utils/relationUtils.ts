export class RelationUtils {
  static load<T>(...relation: (keyof T)[]) {
    const option = {
      relations: {},
    };
    relation.forEach((rel) => {
      option.relations[rel as string] = true;
    });
    return option;
  }
}
