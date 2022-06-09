import { Repository } from 'typeorm';
export class ResourceService<T extends any> {
  constructor(protected readonly repository: Repository<T>) { }

  async create(entity: any): Promise<T> {
    return await this.repository.save(entity);
  }

  async remove(entity: any): Promise<T> {
    return entity;
  }

  async update(entity: any): Promise<T> {
    return entity;
  }

  async findAndCount(criteria: any): Promise<any> {
    return 1;
  }
  async findByIds(id: string): Promise<any> {
    return 1;
  }
}
