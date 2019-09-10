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
  public defaultOrder = 'ascending';
  public order$ = new BehaviorSubject(this.defaultOrder);

  public onSearchTextChange = new BehaviorSubject(this.searchText$.getValue());
  public onTypeChange = new BehaviorSubject(this.type$.getValue());
  public onSortChange = new BehaviorSubject(this.sort$.getValue());
  public onOrderChange = new BehaviorSubject(this.order$.getValue());
  public filteredItems$: Observable<MediaLibraryItem[]>;

  public ngOnInit() {
    this.filteredItems$ = combineLatest(
      this.items$,
      this.filterStringStream(this.onSearchTextChange),
      this.filterStringStream(this.onTypeChange),
      this.filterStringStream(this.onSortChange),
      this.filterStringStream(this.onOrderChange)
    )
    .pipe(
      map(([items, searchText, selectedType, sortType, order]) => {
        const filteredItems = orderBy(
            items
              .filter(({ name }) => !searchText || (name || '').indexOf(searchText) > -1)
              .filter(({ type }) => !selectedType || type === selectedType),
            sortType
          );
        if (order !== this.defaultOrder) {
          return filteredItems.reverse();
        }
        return filteredItems;
      })
    );
  }

  public clearFilter() {
    this.searchText$.next('');
    this.type$.next('');
    this.sort$.next(this.defaultSort);
    this.order$.next(this.defaultOrder);
  }

  private filterStringStream(stream: BehaviorSubject<string>) {
    return stream.pipe(filter((selectedType) => typeof selectedType === 'string'));
  }
}
