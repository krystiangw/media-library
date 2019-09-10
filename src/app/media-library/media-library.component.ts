import {Component, Input, OnInit} from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, concatAll } from 'rxjs/operators';
import { orderBy } from 'lodash';
import { MediaLibraryItem } from '@app/media-library/models/media-library-item';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  @Input() items$: Observable<MediaLibraryItem[]>;
  public searchText$ = new BehaviorSubject('');
  public type$ = new BehaviorSubject('');
  public defaultSort = 'name';
  public sort$ = new BehaviorSubject(this.defaultSort);
  public onSearchTextChange = new BehaviorSubject(this.searchText$.getValue());
  public onTypeChange = new BehaviorSubject(this.type$.getValue())
    .pipe(filter((selectedType) => typeof selectedType === 'string'));
  public onSortChange = new BehaviorSubject(this.sort$.getValue())
    .pipe(filter((selectedType) => typeof selectedType === 'string'));

  public filteredItems$: Observable<MediaLibraryItem[]>;

  public ngOnInit() {
    this.filteredItems$ = combineLatest(
      this.items$,
      this.onSearchTextChange,
      this.onTypeChange,
      this.onSortChange
    )
    .pipe(
      map(([items, searchText, selectedType, sortType]) => {
        console.log('sortType ', sortType);
        return orderBy(
            items
              .filter(({ name }) => !searchText || (name || '').indexOf(searchText) > -1)
              .filter(({ type }) => !selectedType || type === selectedType),
            sortType
          );
      })
    );
  }

  public clearFilter() {
    this.searchText$.next('');
    this.type$.next('');
    this.sort$.next(this.defaultSort);
  }
}
