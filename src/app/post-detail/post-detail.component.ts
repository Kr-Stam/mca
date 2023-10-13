import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPhoto, IPost } from '../post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  photo: IPhoto | undefined;
  post: IPost | undefined;
  comments: IComment[] = [];


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.photo = this.route.snapshot.data['photo'];
    this.post = this.route.snapshot.data['post'];
    this.comments = this.route.snapshot.data['comments'];

    console.log('photoUrl: ' + this.photo?.url);
    //ne znam zosto so ova instantno mi loadira
    //mislam deka e nesto povrzano so API

    let id: Number = +this.route.snapshot.params['id'];

  }
}
