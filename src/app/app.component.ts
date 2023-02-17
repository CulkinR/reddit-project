import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];


  constructor() {
    this.articles=[
      new Article('Angular', 'https://angular.io', 3),
      new Article('Google', 'https://google.ie', 5),
      new Article('Tiktok', 'https://tiktok.com', 2)
    ];
  }



  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value=''
    link.value=''
    console.log(`Adding Article Title: ${title.value} and Article Link: ${link.value}`)
    return false
  }
}
