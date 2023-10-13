import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment, IPhoto, IPost } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  photo: IPhoto | undefined;
  post: IPost | undefined;
  comments: IComment[] = [];


  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.photo = this.route.snapshot.data['photo'];
    this.post = this.route.snapshot.data['post'];
    this.comments = this.route.snapshot.data['comments'];

    console.log('photoUrl: ' + this.photo?.url);
    //ne znam zosto so ova instantno mi loadira
    //mislam deka e nesto povrzano so API

    let id: Number = +this.route.snapshot.params['id'];

    
  }

  deletePost(){
    if(confirm("Are you sure you want to delete the post?")) {
      this.postService.delete(this.post!).subscribe(response => console.log(response));
      this.router.navigate(['']);
    }
  }

}
