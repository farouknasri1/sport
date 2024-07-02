import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articlesTab:any=[
    {Id:1,Title:"real",description:"sldkd",date:'14/11/11',img:"assets/images/img_1.jpg"},
    {Id:1,Title:"fcb",description:"fezfe",date:'13/11/11',img:"assets/images/img_2.jpg"},
    {Id:1,Title:"mancity",description:"ezez",date:'12/11/11',img:"assets/images/img_3.jpg"},
    {Id:1,Title:"psg",description:"ezeze",date:'12/11/11',img:"assets/images/img_1.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
