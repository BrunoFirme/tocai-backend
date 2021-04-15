import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from '../infra/typeorm/entities/usersEntity';

@Injectable()
export class usersService {
  constructor(
    @InjectRepository(user)
    private users: Repository<user>,
  ) {}

  public getUsers() {
    return this.users.find();
  }

  public getUserById(id: number): Promise<any> {
    return new Promise((resolve) => {
      const user = this.users.findOne(id);

      if (!user) {
        throw new HttpException('Not Found', 404);
      }

      return resolve(user);
    });
  }

  public getUserByEmail(email: string): Promise<any> {
    return new Promise((resolve) => {
      const user = this.users.findOne(email);

      if (!user) {
        throw new HttpException('Not Found', 404);
      }

      return resolve(user);
    });
  }

  public postUser(user) {
    return this.users.insert(user);
  }

  public putUserById(id: number, field: string, value: string): Promise<any> {
    return new Promise((resolve) => {
      const result = this.users.update(id, { [field]: [value] });

      return resolve(result);
    });
  }

  public deleteUserById(id: number): Promise<any> {
    return new Promise((resolve) => {
      const result = this.users.delete(id);

      return resolve(result);
    });
  }
}
