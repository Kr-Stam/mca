import { Component } from '@angular/core';
import { IPhoto } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  photos: IPhoto[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.route.snapshot.data['photos'];
  }
}
