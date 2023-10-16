import { Component, Input } from '@angular/core';
import { IPhoto } from '../post.model';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent {
  @Input('photo') photo: IPhoto | undefined;

  ngOnInit() {
  }
}
