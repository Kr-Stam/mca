import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPhoto } from './post.model';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  delete(photo: IPhoto) {
    return this.http
      .delete<IPhoto>('https://jsonplaceholder.typicode.com/photos/' + photo.id)
      .pipe(
        catchError((err) => throwError(() => new Error('Problem with deleting photo')))
      );
  }

  add(photo: IPhoto) {
    return this.http
      .post<IPhoto>('https://jsonplaceholder.typicode.com/photos', photo)
      .pipe(
        catchError((err) => throwError(() => new Error('Problem with adding photo')))
      );
  }

  edit(photo: IPhoto) {
    return this.http
      .put<IPhoto>('https://jsonplaceholder.typicode.com/photos/' + photo.id, photo)
      .pipe(
        catchError((err) => throwError(() => new Error('Problem with editing photo')))
      );
  }
  constructor(private http: HttpClient) {}
  
  getPhotos() {
    return this.http.get<IPhoto[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  getPhotoById(id: number) {
    return this.http.get<IPhoto>(
      'https://jsonplaceholder.typicode.com/photos/' + id
    );
  }

}

export const photosResolver: ResolveFn<IPhoto[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPhotos();
};

export const photoResolver: ResolveFn<IPhoto> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PostService).getPhotoById(+route.params['id']);
};

