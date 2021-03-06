import { EditorViewDirective } from './article/editor-view.directive';
import { ArticleModule } from './article/article.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorViewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
