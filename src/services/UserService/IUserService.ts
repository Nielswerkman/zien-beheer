import {IGenericService} from '../IGenericService';
import {User} from '../../models/user';

export interface IUserService extends IGenericService<User> {
  login(username: string, password: string): User;
}
