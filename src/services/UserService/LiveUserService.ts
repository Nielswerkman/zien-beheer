import {IUserService} from './IUserService';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Rx';
import {host, folder} from 'global';
import { HttpClientService } from "services/HttpClientService";
import { Http, Response, Headers } from '@angular/http';

export class LiveUserService implements IUserService {
  login(username: string, password: string): User {
    return undefined;
  }
    post(object: User) {
        return this.http.post(this.Url + object)
    }
    put(object: User) {
        return this.http.put(this.Url + object)
    }
    get(id: number): Observable<User> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    private Url = host + folder + 'user/';

    constructor(private http: HttpClientService) {

    }

    getAll(): Observable<User[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }

}
