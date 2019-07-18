import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.apiLogUrl;

@Injectable({
    providedIn: 'root'
})
export class ServerLogService {
    constructor(
        private http: HttpClient
    ) {}

    log(serveLog: ServerLog) {
       return this.http.post(API_URL + '/infra/log', serveLog);
    }
}
