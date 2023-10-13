import { Component, Input } from '@angular/core';
import { IComment } from '../post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input('comment') comment: IComment | undefined;

  
}
