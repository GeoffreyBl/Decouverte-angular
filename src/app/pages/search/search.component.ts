import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterSelect="";
  constructor() { }

  ngOnInit(): void {
  }
  console.log(this.filterSelect.value)
}
