import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IComment, IPhoto, IPost } from './post.model';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  add(post: IPost, photo: IPhoto) {
    throw new Error('Method not implemented.');
  }
  edit(post: IPost, photo: IPhoto) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<IPost[]>(
      'http://jsonplaceholder.typicode.com/posts'
    );
  }

  getPhotos() {
    return this.http.get<IPhoto[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  getPostById(id: number) {
    return this.http.get<IPost>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  getPhotoById(id: number) {
    return this.http.get<IPhoto>(
      'https://jsonplaceholder.typicode.com/photos/' + id
    );
  }

  getCommentsById(id: number) {
    return this.http.get<IComment[]>(
      'https://jsonplaceholder.typicode.com/posts/' + id + '/comments'
    );
  }
}

export const postsResolver: ResolveFn<IPost[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPosts();
};

export const photosResolver: ResolveFn<IPhoto[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPhotos();
};

export const postResolver: ResolveFn<IPost> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPostById(+route.params['id']);
};

export const photoResolver: ResolveFn<IPhoto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPhotoById(+route.params['id']);
};

export const commentsResolver: ResolveFn<IComment[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getCommentsById(+route.params['id']);
};

