import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesColumns:[
    {
      field:"cateogryId",
    header:"Category Id"
  },
  {
    field:"cateogryName",
  header:"Category Name"
}


  ];

  categoriesData = [{
    cateogryId:1,
    cateogryName:"Clothes"

  },
  {
    cateogryId:2,
    cateogryName:"Electronics"

  }]

  constructor(
    private router:Router,private mockServ:MockService
  ) { }

  ngOnInit() {
    this.categoriesData=this.mockServ.data;
  }

  crudAction(rowItem:any,action:String){
    if(action=="EDIT"){
      this.router.navigate([`/categories/${rowItem.id}/edit`]);
    }
    else if(action=="ADD"){
      this.router.navigate([`/categories/new`]);
    }
   else if(action=="DELETE"){
      this.mockServ.removeCategory(rowItem.id)
      this.categoriesData=this.mockServ.data;
    }
  }

}
