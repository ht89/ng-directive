import { EditorArticleService } from './editor-article.service';
import { ArticleService } from './article.service';
import { Directive } from '@angular/core';

@Directive({
    selector: '[editor-view]',
    providers: [
        { provide: ArticleService, useExisting: EditorArticleService }
    ]
})

export class EditorViewDirective {}
