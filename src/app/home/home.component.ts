import { Component, OnInit } from '@angular/core';
import * as alterify from 'alertifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alterify.set('notifier', 'position', 'top-right');
    alterify.success('message');
  }

}
