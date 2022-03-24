import { Input, Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from './http.service/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'my-app',
    templateUrl: '../layout/app.newsPage.html',
    styleUrls: ['../style/app.newsPage.css'],

    providers: [HttpService]
})
export class NewsPage implements OnInit { 
    private httpServiceGetId: HttpService;
    

    constructor( private http: HttpClient ){
        
    }

    ngOnInit(): void{ 
    }
}