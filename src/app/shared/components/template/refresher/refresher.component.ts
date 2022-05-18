import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-refresher-component',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {

  @Output() refreshPage = new EventEmitter<Event>()

  constructor() { }

  ngOnInit() {}

  doRefresh(event) {
    this.refreshPage.emit(event)
  }

}
