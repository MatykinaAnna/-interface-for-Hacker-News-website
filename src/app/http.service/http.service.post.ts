import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpServicePost{
  
    constructor(private http: HttpClient){ }

    postData(comment: Comment){
    }
}
