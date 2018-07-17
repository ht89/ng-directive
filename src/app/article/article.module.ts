import { EditorArticleService } from './editor-article.service';
import { ArticleService } from './article.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        ArticleComponent, 
    ],
    declarations: [
        ArticleComponent,
    ],
    providers: [ArticleService, EditorArticleService]
})
export class ArticleModule { }