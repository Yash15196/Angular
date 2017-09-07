import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { SearchAppComponent } from '../search-app/search-app.component';

@Injectable()
export class SearchServiceService {

  constructor(public http:Http) { }
getPosts(){
	return this.http.get('https://newsapi.org/v1/sources?language=en')
	.map(res=>res.json())

}



getname(name){
	var api="https://newsapi.org/v1/articles?source="+name+"&sortBy=top&apiKey=5d33faee98b84a05ad628c04d6bdda38";
return this.http.get(api)
	
	.map(res=>res.json());
}

}

