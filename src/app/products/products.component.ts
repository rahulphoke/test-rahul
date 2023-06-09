import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from '../mock.service';
import { ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(
    private router:Router,private mockServ:MockService,
  ) { }

  ngOnInit() {
    
    this.products=this.mockServ.getAllProducts();

  }

  crudAction(rowItem:any,action:String){
    ;
    if(action=="EDIT"){
      ;
      this.router.navigate([`/products/${rowItem.productId}/${rowItem.categoryId}/edit`]);
    }
    else if(action=="ADD"){
      this.router.navigate([`/products/new`]);
    }
   else if(action=="DELETE"){
      
      this.mockServ.removeProduct(rowItem)
      this.products=this.mockServ.getAllProducts();
     
  }

    
  }

}
