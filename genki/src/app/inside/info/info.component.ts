import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

    constructor(private router:Router) {};

    goToPage(route:string) {
        this.router.navigate([route]);
    }
}
