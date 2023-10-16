import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { photoResolver, photosResolver } from './post.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostThumbnailComponent,
    PostDetailComponent,
    NavbarComponent,
    CreatePostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'posts/create', component: CreatePostComponent},
      {path: 'posts/edit/:id', component: EditPostComponent, resolve: { photo: photoResolver}},
      {path: 'posts/:id', component: PostDetailComponent, resolve: { photo: photoResolver}},
      {path: 'posts', component: FeedComponent, resolve: { photos: photosResolver}},
      {path: '', redirectTo: 'posts', pathMatch: 'full'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
