import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { host, folder } from 'global';

import { Internship } from 'models/Internship';

import { HttpClientService } from 'services/HttpClientService';
import { IGenericService } from 'services/IGenericService';

@Injectable()
export class LiveInternshipService implements IGenericService<Internship> {

    private Url = host + folder + 'internship/';

    constructor(private http: HttpClientService) {

    }

    post(object: Internship) {
        return this.http.post(this.Url, object)
    }
    put(object: Internship) {
        return this.http.put(this.Url , object)
    }
    get(id: number): Observable<Internship> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    getAll(): Observable<Internship[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
