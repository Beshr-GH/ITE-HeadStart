import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css'],
 /* Pipes : [FilterPipe]*/
})
export class ProListComponent implements OnInit {
id;
img  ;
name;
category;
projects =[
    {
      num:"1",
      name:"start up",
      img:"1.jpg",
      tag1:"nlb",
      tag2:"nlb",
      tag3:"nlb",
      tag4:"nlb",
      tag5:"nlb"
      
    },
    {
      num:"2",
      name:"start up2",
      img:"2.jpg",
      tag1:"nlb",
      tag2:"nlb",
      tag3:"nlb",
      tag4:"nlb",
      tag5:""
 
    }

  ];


constructor(private route : ActivatedRoute) {
  this.img=route.snapshot.params['img'];
  this.name=route.snapshot.params['name'];
  
  
     }
  
    ngOnInit() {
      console.log(this.img);
    }
  
  }
  