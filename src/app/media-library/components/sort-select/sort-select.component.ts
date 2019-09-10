import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss']
})
export class SortSelectComponent implements OnInit {
  @Input() sort$: Observable<string>;
  @Output() change: EventEmitter<string> = new EventEmitter();

  public types = [
    {
      name: 'Date Uploaded',
      type: 'uploadedAt'
    },
    {
      name: 'Alphabetical',
      type: 'name'
    }
  ];
  public type = '';

  public ngOnInit() {
    this.sort$
      .subscribe(val => {
        this.type = val;
        this.change.emit(this.type);
      });
  }
}
