import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

    name:string;
    
    ngOnInit() {
        this.onLoad();
    }

    onLoad() {
        this.name = window.sessionStorage.getItem("name");
    }
}
