import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { host, folder } from 'global';

import { Blog } from 'models/blog';

import { HttpClientService } from 'services/HttpClientService';
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
