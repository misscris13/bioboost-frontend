import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../login/model/User";
// import { ResponseCredentials } from 'src/app/core/models/ResponseCredentials';
// import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient,
    ) {}

    correctUserPass(user:string, pass:string) : /*Observable<User>*/ boolean {

        return true;
        // return this.http.post('localhost:8080/authenticate', {email:user, password:pass});
    }
}
