import { Input, Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from '../http.service/http.service';
import { HttpClient } from '@angular/common/http';
import { News } from '../classes/news'

@Component({
    selector: 'news',
    templateUrl: '../../layout/app.news.html',
    styleUrls: ['../../style/app.news.css'],

    providers: [HttpService]
})
export class AppNews implements OnInit { 
    private httpServiceGetId: HttpService;
    public news: News;
    @Input() id: number;

    constructor( private http: HttpClient ){
    }

    @HostListener("click") onClick(): void {
      console.log('переход')
    }

    ngOnInit(): void{ 
        console.log('id', this.id)
        this.httpServiceGetId = new HttpService(this.http, `https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`)
        this.httpServiceGetId.getData().subscribe((data: News) => {
            console.log(data)
            this.news = new News(data.by, data.descendants, data.id,
                                 data.score, data.time, data.title,
                                 data.type, data.url)
        });
    }
}