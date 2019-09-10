import {Component, Input, OnInit} from '@angular/core';
import { MediaLibraryItem } from './models/media-library-item';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  @Input() items$: Observable<MediaLibraryItem[]>;
  public searchText$ = new BehaviorSubject('');
  public type$ = new BehaviorSubject('');
  public onSearchTextChange = new BehaviorSubject(this.searchText$.getValue());
  public onTypeChange = new BehaviorSubject(this.type$.getValue())
    .pipe(filter((selectedType) => typeof selectedType === 'string'));
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

  public clearFilter() {
    this.searchText$.next('');
    this.type$.next('');
  }
}
