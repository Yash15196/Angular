import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
news:any
onVoted(agreed:any) {
     this.news=agreed
    console.log(this.news)
  }
}