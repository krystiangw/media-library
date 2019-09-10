import {Component, Input, Output, EventEmitter} from '@angular/core';
import { mediaLibraryTypeList } from '@app/media-library/models';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent {
  @Input() type = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  public types = [
    {
      name: 'All Media',
      type: ''
    },
    ...mediaLibraryTypeList
  ];
}
