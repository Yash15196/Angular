import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchServiceService } from './services/search-service.service'; 
import { AppComponent } from './app.component';
import { SearchAppComponent } from './search-app/search-app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchAppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
