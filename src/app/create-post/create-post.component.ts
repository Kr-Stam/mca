import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IPhoto } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  id: FormControl = new FormControl('');
  albumId: FormControl = new FormControl('');
  title: FormControl = new FormControl('');
  url: FormControl = new FormControl('');
  thumbnailUrl: FormControl = new FormControl('');
  postForm: FormGroup = new FormGroup([
    this.id,
    this.title,
    this.url,
    this.thumbnailUrl,
  ]);

  photo: IPhoto = {
    id: 0,
    albumId: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  ngOnInit() {
    this.url.addValidators([
      Validators.pattern('http(s)?://.*'),
      Validators.required,
    ]);
    this.thumbnailUrl.addValidators([
      Validators.pattern('http(s)?://.*'),
      Validators.required,
    ]);
    this.id.addValidators([Validators.required]);
    this.albumId.addValidators([Validators.required]);
    this.title.addValidators([Validators.required]);
  }

  submit() {
    this.postService.add(this.photo).subscribe((result) => console.log(result));
  }
}
