import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  @Input() searchText = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();
}
