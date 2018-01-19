import { Injectable } from '@angular/core';
import { host, folder } from 'global';
import { Response } from '@angular/http';
import { HttpClientService } from 'services/HttpClientService';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Blog } from 'models/blog';
import { IGenericService } from 'services/IGenericService';


@Injectable()
export class LiveBlogService implements IGenericService<Blog> {

    private Url = host + folder + 'blog/';

    constructor(private http: HttpClientService) {

    }

    post(object: Blog) {
        return this.http.post(this.Url, object)
    }
    put(object: Blog) {
        return this.http.put(this.Url , object)
    }
    get(id: number): Observable<Blog> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    getAll(): Observable<Blog[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
