import {Component, OnInit} from '@angular/core';
import { MediaLibraryItem } from '@app/media-library/models/media-library-item';
import { range, sample } from 'lodash';
import * as randomWords from 'random-words';
import { mediaLibraryTypes } from '@app/media-library/models/media-library-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public items: MediaLibraryItem[] = [];
  public noItems = 20;

  public ngOnInit() {
    this.generateItems();
  }

  public generateItems() {
    this.items = range(this.noItems).map(id => ({
      id,
      name: randomWords(),
      type: sample(mediaLibraryTypes),
      uploadedAt: this.randomDate(new Date(2016, 0, 1), new Date()).getTime()
    }));
  }

  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
