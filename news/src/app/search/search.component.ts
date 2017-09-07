import { Component,Output, EventEmitter,Input} from '@angular/core';
import { SearchAppComponent } from '../search-app/search-app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
@Input('news') news:any;
  constructor() { }

  

}
