import { Component, OnInit } from '@angular/core';
import {ProListService } from '../pro-list.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[ProListService]
  
})
export class DirectoryComponent implements OnInit {

  getData(){
    this.lister.log();
  }
 projects= [  ];
  constructor( private lister : ProListService ) {


   }

  ngOnInit() {
    this.lister.getdata();  
  }

}
