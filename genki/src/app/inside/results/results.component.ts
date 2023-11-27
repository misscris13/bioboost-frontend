import { Component } from '@angular/core';
import { ResultService } from './service/result-service.service';
import { Product } from './model/Product';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

    name : string;

    products : Product[];
    
    constructor(
        private resultService: ResultService,
      ) { }

    ngOnInit() {
        this.onLoad();
        this.getTop3();
    }

    onLoad() {
        this.name = window.sessionStorage.getItem("name");
    }

    getTop3() {
        this.resultService.getTop3().subscribe(

            res =>{
                this.products = res;
            }
        );
    }
}
