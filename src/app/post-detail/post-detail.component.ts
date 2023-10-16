import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  photo: IPhoto | undefined;


  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.photo = this.route.snapshot.data['photo'];
  }

  deletePost(){
    if(confirm("Are you sure you want to delete the post?")) {
      this.postService.delete(this.photo!).subscribe(response => console.log(response));
      this.router.navigate(['']);
    }
  }

}
