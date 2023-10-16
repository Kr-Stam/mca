import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  id: FormControl = new FormControl('');
  albumId: FormControl = new FormControl('');
  title: FormControl = new FormControl('');
  url: FormControl = new FormControl('');
  thumbnailUrl: FormControl = new FormControl('');
  postForm: FormGroup = new FormGroup([
    this.id,
    this.albumId,
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
    this.url.addValidators([Validators.pattern('http(s)?://.*')]);
    this.thumbnailUrl.addValidators([Validators.pattern('http(s)?://.*')]);
    this.id.addValidators([Validators.required]);
    this.albumId.addValidators([Validators.required]);
    this.title.addValidators([Validators.required]);

    this.photo = this.route.snapshot.data['photo'];

    this.id.setValue(this.photo.id);
    this.title.setValue(this.photo.title);
    this.url.setValue(this.photo.url);
    this.thumbnailUrl.setValue(this.photo.thumbnailUrl);
  }

  submit() {
    this.postService
      .edit(this.photo)
      .subscribe((response) => console.log(response));
  }

  deletePost() {
    if (confirm('Are you sure you want to delete the post?')) {
      this.postService
        .delete(this.photo!)
        .subscribe((response) => console.log(response));
      this.router.navigate(['']);
    }
  }
}
