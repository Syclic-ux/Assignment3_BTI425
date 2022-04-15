import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];
  // categories: Array<any> = [
  //   {cat: "Crime", num: 2},
  //   {cat: "Comedy", num: 1},
  //   {cat: "Musical", num: 1},
  //   {cat: "Adventure", num: 2},
  //   {cat: "Drama", num: 2},
  //   {cat: "Action", num: 2},
  //   {cat: "Documentary", num: 1},
  //   {cat: "Thriller", num: 1}
  //  ];

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
      this._postService.getCategories().subscribe(
        data => {//console.log(data);
          this.categories = data; //console.log(this.categories);
        },
        err => console.log("Error in Categories" + err)
      );
  }

}
