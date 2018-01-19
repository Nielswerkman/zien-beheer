import { Injectable } from '@angular/core';
import { HttpClientService } from 'services/HttpClientService';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { InternshipRoute } from 'models/internshipRoute';
import { folder, host } from 'global';
import { IGenericService } from 'services/IGenericService';

@Injectable()
export class LiveInternshipRouteService implements IGenericService<InternshipRoute> {

    private Url = host + folder + 'internshipRoute/';

    constructor(private http: HttpClientService) {

    }

    post(object: InternshipRoute) {
        return this.http.post(this.Url, object);
    }
    put(object: InternshipRoute) {
        return this.http.put(this.Url , object);
    }
    get(id: number): Observable<InternshipRoute> {
        return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
    }
    getAll(): Observable<InternshipRoute[]> {
        return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
    }
}
