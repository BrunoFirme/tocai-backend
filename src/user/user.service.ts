import { Injectable, HttpException } from '@nestjs/common';
import { users } from './user.mock';

@Injectable()
export class UserService {
  private users = users;

  public getUsers() {
    return this.users;
  }

  public getUserById(id: number): Promise<any> {
    const userId = Number(id);
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.id === userId);

      if (!user) {
        throw new HttpException('Not Found', 404);
      }

      return resolve(user);
    });
  }

  public getUserByEmail(email: string): Promise<any> {
    const userEmail = String(email);
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.email === userEmail);

      if (!user) {
        throw new HttpException('Not Found', 404);
      }

      return resolve(user);
    });
  }

  public postUser(user) {
    return this.users.push(user);
  }

  public putUserById(id: number, field: string, value: string): Promise<any> {
    const userId = Number(id);
    return new Promise((resolve) => {
      const index = this.users.findIndex((user) => user.id === userId);

      if (index === -1) {
        throw new HttpException('Not Found', 404);
      }

      this.users[index][field] = value;

      return resolve(this.users[index]);
    });
  }

  public deleteUserById(id: number): Promise<any> {
    const userId = Number(id);
    return new Promise((resolve) => {
      const index = this.users.findIndex((user) => user.id === userId);

      if (index === -1) {
        throw new HttpException('Not Found', 404);
      }

      this.users.splice(index, 1);

      return resolve(this.users);
    });
  }
}
