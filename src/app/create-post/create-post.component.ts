import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IPhoto, IPost } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor(private route: ActivatedRoute, private postService: PostService) {}

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

  ngOnInit(){
    this.imageUrl.addValidators([
      Validators.pattern('https:\/\/*'),
      Validators.required
    ]);
    this.body.addValidators([
      Validators.required
    ]);
    this.title.addValidators([
      Validators.required
    ])
  }

  submit() {
    this.postService.add(this.post, this.photo);
  }
}
