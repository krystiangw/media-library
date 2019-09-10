import { Component, OnInit } from '@angular/core';
import { MediaLibraryItem } from '@app/media-library/models/media-library-item';
import { range, sample } from 'lodash';
import * as randomWords from 'random-words';
import { mediaLibraryTypeList } from '@app/media-library/models/media-library-type';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public items$: BehaviorSubject<MediaLibraryItem[]> = new BehaviorSubject([]);
  public noItems = 20;

  public ngOnInit() {
    this.generateItems();
  }

  public generateItems() {
    this.items$.next(range(this.noItems).map(id => {
      const type = sample(mediaLibraryTypeList);
      return {
        id,
        name: `${randomWords()}_${randomWords()}.${type.extension}`,
        type: type.type,
        uploadedAt: this.randomDate(new Date(2016, 0, 1), new Date()).getTime()
      };
    }));
  }

  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
