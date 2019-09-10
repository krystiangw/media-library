import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.scss']
})
export class OrderSelectComponent implements OnInit {
  @Input() order$: Observable<string>;
  @Output() change: EventEmitter<string> = new EventEmitter();
  public types = [
    {
      name: 'Ascending',
      type: 'ascending'
    },
    {
      name: 'Descending',
      type: 'descending'
    }
  ];

  public type = 'ascending';

  public ngOnInit() {
    this.order$
      .subscribe(val => {
        this.type = val;
        this.change.emit(this.type);
      });
  }
}
