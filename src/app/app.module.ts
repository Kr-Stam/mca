import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostThumbnailComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'posts', component: FeedComponent},
      {path: '', redirectTo: 'posts', pathMatch: 'full'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
