import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { mediaLibraryTypeList } from '@app/media-library/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit {
  @Input() type$: Observable<string>;
  @Output() change: EventEmitter<string> = new EventEmitter();

  public types = [
    {
      name: 'All Media',
      type: ''
    },
    ...mediaLibraryTypeList
  ];
  public type = '';

  public ngOnInit() {
    this.type$
      .subscribe(val => {
        this.type = val;
        this.change.emit(this.type);
      });
  }
}
