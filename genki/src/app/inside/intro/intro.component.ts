import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

    name:string;

    constructor(private router:Router) {};

    setName(n:string) : void {
        this.name = n;
        console.log("holi");
    } 

    goToPage(route:string) {
        this.router.navigate([route]);
    }
}
