import {User} from '../../models/user';
import {folder, host} from '../../global';
import {HttpClientService} from '../HttpClientService';
import {IUserService} from './IUserService';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class LiveUserService implements IUserService {

  private Url = host + folder + 'user';

  constructor(private http: HttpClientService) {
  }

  login(username: string, password: string): Observable<User> {
    return undefined;
  }

  post(object: User): Observable<boolean> {
    return undefined;
  }

  put(object: User): Observable<boolean> {
    return undefined;
  }

  get(id: number): Observable<User> {
    return this.http
      .get(this.Url + id)
      .map(request => {
        return request.json()
      });
  }

  getAll(): Observable<User[]> {
    return this.http
      .get(this.Url + '/all')
      .map(request => {
        console.log(request);
        return request.json();
      });
  }

  delete(id: number): Observable<boolean> {
    return undefined;
  }


}
