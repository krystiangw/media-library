import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() searchText$: Observable<string>;
  @Output() change: EventEmitter<string> = new EventEmitter();
  public searchText = '';

  ngOnInit() {
    this.searchText$
      .subscribe(val => {
        this.searchText = val;
        this.change.emit(this.searchText);
      });
  }
}
