import { Article, ArticleSourceInterface } from './article-source.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService implements ArticleSourceInterface {
    title = 'Researchers Determine Ham Sandwich Not Turing Complete';
    body = 'Computer science community remains skeptical';

    constructor() { 
        console.log('ArticleService constructor');
    }

    getArticle(): Article {
        return {
            title: this.title,
            body: this.body
        }
    }

}