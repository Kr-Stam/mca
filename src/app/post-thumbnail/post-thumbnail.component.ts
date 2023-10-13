import { Component, Input } from '@angular/core';
import { IPhoto, IPost } from '../post.model';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent {
  @Input('post') post: IPost | undefined;
  @Input('photo') photo: IPhoto | undefined;

  ngOnInit() {
    // console.log(this.photo);
    // console.log(this.post);
  }
}
