import { Injectable } from '@angular/core';
// import { User } from "../model/User";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor() { }

    correctUserPass(user:string, pass:string) : boolean {

        return true;
    }
}
