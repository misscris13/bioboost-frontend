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

    ngOnInit() {
        this.onLoad();
    }

    onLoad() {
        this.name = window.sessionStorage.getItem("name");
    }

    goToPage(route:string) {
        this.router.navigate([route]);
    }
}
