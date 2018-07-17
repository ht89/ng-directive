import { Article } from './article-source.interface';
import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-article',
    template: `
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }} </p>
        <p *ngIf="article.notes">
            <i>Notes: {{ article.notes }}</i>
        </p>
    `,
})
export class ArticleComponent implements OnInit {
    article: Article;

    constructor(private articleService: ArticleService) { }

    ngOnInit() { 
        this.article = this.articleService.getArticle();
    }

}