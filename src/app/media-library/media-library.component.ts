import {Component, Input, OnInit} from '@angular/core';
import { MediaLibraryItem } from './models/media-library-item';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  @Input() items$: Observable<MediaLibraryItem[]>;
  public searchText = '';
  public type = '';
  public onSearchTextChange = new BehaviorSubject(this.searchText);
  public onTypeChange = new BehaviorSubject(this.searchText);
  public filteredItems$: Observable<MediaLibraryItem[]>;

  public ngOnInit() {
    this.filteredItems$ = combineLatest(
      this.items$,
      this.onSearchTextChange,
      this.onTypeChange
    )
    .pipe(
      map(([items, searchText, selectedType]) => {
        return items
          .filter(({ name }) => !searchText || (name || '').indexOf(searchText) > -1)
          .filter(({ type }) => !selectedType || type === selectedType);
      })
    );
  }
}
