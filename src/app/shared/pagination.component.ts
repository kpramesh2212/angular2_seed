
import {Component, Input, OnInit, OnChanges, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'pagination',
  templateUrl: '/app/shared/pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Input() pageSize = 5;
  pages: Array<number>;
  selectedPage = 1;
  @Output() pageChange = new EventEmitter();

  constructor() {

  }

  ngOnChanges() {
    this.selectedPage = 1;
    this.pages = new Array(Math.ceil(this.items.length / this.pageSize));
  }

  ngOnInit() {

  }

  onClick(value: number) {
    var selected = this.selectedPage + value;
    if (selected < 1 || selected > this.pages.length)
      return;
    this.selectedPage += value;
    this.emitEvent();
  }

  selectPage(page: number) {
    this.selectedPage = page;
    this.emitEvent();
  }

  private emitEvent() {
    this.pageChange.emit({page: this.selectedPage});
  }

}
