import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { HttpClientModule }   from '@angular/common/http';

import { AppNews } from './components/app.news'
import { NewsPage } from './app.newsPage'

const appRoutes: Routes =[
    //{ path: '', component: AppComponent},
    { path: 'news', component: NewsPage},
];

@NgModule({
    imports:      [ BrowserModule, HttpClientModule ],
    declarations: [ AppComponent, AppNews, NewsPage ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }