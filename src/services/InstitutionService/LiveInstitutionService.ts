import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { host, folder } from 'global';

import { Institution } from 'models/institution';

import { HttpClientService } from 'services/HttpClientService';
import { IGenericService } from 'services/IGenericService';

@Injectable()
export class LiveInstitutionService implements IGenericService<Institution> {

    private Url = host + folder + 'institution/';

    constructor(private http: HttpClientService) {

    }

    post(object: Institution) {
        return this.http.post(this.Url, object)
    }
    put(object: Institution) {
        return this.http.put(this.Url , object)
    }
    get(id: number): Observable<Institution> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }

    getAll(): Observable<Institution[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
