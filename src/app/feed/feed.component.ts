import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { IPhoto, IPost } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  posts: IPost[] = [];
  photos: IPhoto[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.postService.getPosts().subscribe((posts: IPost[]) => {
    //   this.posts = posts;
    // })
    this.posts = this.route.snapshot.data['posts'];
    this.photos = this.route.snapshot.data['photos'];

  

    // console.log("posts ");
    // console.log(this.posts);
    
    // console.log("photos ");
    // console.log(this.photos);
  }
}
