import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

    constructor(private http: Http, private router: Router) { }

    authorize(headers: Headers) {
        headers.append('Content-Type', 'application/json');
    }

    get(url) {
        const headers = new Headers();
        this.authorize(headers);

        return this.http.get(url, { headers: headers });
    }

    post(url, body) {
        const headers = new Headers();
        this.authorize(headers);

        return this.http.post(url, body, {headers: headers});
    }

    put(url, body) {
        const headers = new Headers();
        this.authorize(headers);

        return this.http.put(url, body, {headers: headers});
    }

    login(url, body) {
        const headers = new Headers();
        this.authorize(headers);

        return this.http.post(url, body, {headers: headers});
    }
}
