import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-page-header-component',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  @Input() pageName = ''

  constructor() { }

  ngOnInit() {}

}
