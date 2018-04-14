import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
name ;

emails = ["1","2","3","4"];
tele = ["11","22","33","44"];
details = "our project";
img;
name2;
Cimg;/*
Cname = "lama";*/
students =[
    {
      tel:"11",
      name:" marah",
      email:"1"
    },
    {
      tel:"22",
      name:" basher",
      email:"2"
    },
    {
      tel:"3",
      name:" lama",
      email:"33"
    },
    {
      tel:"4",
      name:" marah",
      email:"44"
    }
  ];
  constructor(private route : ActivatedRoute) {
this.img=route.snapshot.params['img'];
this.name2=route.snapshot.params['name2'];
this.Cimg=route.snapshot.params['name'];/*
this.Cimg=route.snapshot.params['Cname'];*/


   }

  ngOnInit() {
    console.log(this.img);
  }

}
