import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service/http.service';
import { HttpServiceParam} from './http.service/http.serviceParam';
import { HttpClient} from '@angular/common/http';
     
@Component({
    selector: 'my-app',
    templateUrl: '../layout/app.component.html',
    styleUrls: ['../style/app.component.css'],

    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    private httpServiceGetId: HttpService;
    public listId: number[]

    constructor( private http: HttpClient ){
        this.httpServiceGetId = new HttpService(http, 'https://hacker-news.firebaseio.com/v0/newstories.json')
    }

    ngOnInit(): void{ 
        this.getDate()
        let intervalGetDate = setInterval(()=>this.getDate(), 60000)
    }

    getDate():void{
        console.log('getDate')
        this.httpServiceGetId.getData().subscribe((data:any[]) => {
            this.listId = data.slice(0, 100)
            console.log(this.listId.length)
        });
    }
}
