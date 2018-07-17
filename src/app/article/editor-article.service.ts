import { Article, ArticleSourceInterface } from './article-source.interface';
import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EditorArticleService extends ArticleService implements ArticleSourceInterface {
    notes = 'Swing & a miss!';

    constructor() { 
        super();
    }

    getArticle(): Article {
        // Combine objects and return the joined object
        return Object.assign(
            {},
            super.getArticle(),
            {
                notes: this.notes
            }
        );
    }

}