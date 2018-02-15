import { Component, OnInit } from '@angular/core';
import {HttpapiService} from '../httpapi.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  siteData: any[];

  constructor(private httpas: HttpapiService) { }

  ngOnInit() {
    this.httpas.getData().subscribe((data) => {
      // console.log(data);
      this.siteData = data;
    });
  }

}
