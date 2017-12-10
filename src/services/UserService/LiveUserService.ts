import {IUserService} from './IUserService';
import {User} from '../../models/user';

export class LiveUserService implements IUserService {
  login(username: string, password: string): User {
    return undefined;
  }

  post(object: User): boolean {
    return undefined;
  }

  put(object: User): boolean {
    return undefined;
  }

  get(id: number): User {
    return undefined;
  }

  getAll(): User[] {
    return undefined;
  }

  delete(id: number): boolean {
    return undefined;
  }

}
