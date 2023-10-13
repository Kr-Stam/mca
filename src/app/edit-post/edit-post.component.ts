import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto, IPost } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  title: FormControl = new FormControl('');
  body: FormControl = new FormControl('');
  imageUrl: FormControl = new FormControl('');

  post: IPost = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };
  photo: IPhoto = {
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  };
   
  
  id: number = 0;

  ngOnInit() {
    this.imageUrl.addValidators([
      Validators.pattern('http(s)?:\/\/.*')
    ]);
    this.body.addValidators([
      Validators.required
    ]);
    this.title.addValidators([
      Validators.required
    ])
    
    this.post = this.route.snapshot.data['post'];
    this.photo = this.route.snapshot.data['photo'];

    this.title.setValue(this.post?.title);
    this.body.setValue(this.post?.body);
    this.imageUrl.setValue(this.photo?.url);
  }

  submit() {
    this.postService.edit(this.post, this.photo).subscribe(response => console.log(response));
  }

  deletePost(){
    if(confirm("Are you sure you want to delete the post?")) {
      this.postService.delete(this.post!).subscribe(response => console.log(response));
      this.router.navigate(['']);
    }
  }
}
