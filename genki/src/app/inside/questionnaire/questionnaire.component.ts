import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {

    name:string;

    constructor(private router:Router) {};

    setName(n:string) : void {
       
        this.name = n;
        window.sessionStorage.setItem("name", n);
    } 

    goToPage(route:string) {
        this.router.navigate([route]);
    }
}
