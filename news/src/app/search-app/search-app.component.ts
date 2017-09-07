import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { SearchServiceService } from '../services/search-service.service'; 
@Component({
  selector: 'app-search-app',
  templateUrl: './search-app.component.html',
  styleUrls: ['./search-app.component.css']
})
export class SearchAppComponent implements OnInit {
posts:any=[];
name : any;
news:any=[];
@Output() onVoted = new EventEmitter<any>();
  constructor(private searchservice:SearchServiceService) { }

  ngOnInit() {
  	this.searchservice.getPosts().subscribe((posts) => {
      console.log(posts)
      this.posts = posts.sources;
});
  }
selected:any;
search(posts){


 this.selected=posts;
   this.searchservice.getname(posts).subscribe((news)=>
 {
   this.news=news.articles;
   this.onVoted.emit(this.news)

})
 }
}

    


	




