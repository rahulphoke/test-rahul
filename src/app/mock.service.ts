import { Injectable } from '@angular/core';
import { ICategory, IProduct, categoryMock } from './mock/mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() {
    this.setData()
   }
  data;
  private setData(){
   this.data=categoryMock.categories;
  }

  private getData(){
   return this.data;

  }

  private getNewId(){
    return this.data.map(category => category.id).reduce((maxId, currentId) => Math.max(maxId, currentId));
 
   }
   
  public getPdouctNewId(cateogryId){
    const ss = this.data.filter(id=>''+id.id==''+cateogryId);
    ;
    return this.data.filter(id=>''+id.id==''+cateogryId)[0].products.map(prod => prod.id).reduce((maxId, currentId) => Math.max(maxId, currentId));
 
   }
 
  addProducts(prodct,id){
    try{
    
    prodct.id =this.getPdouctNewId(id)?this.getPdouctNewId(id)+2:0;
    }catch(e){
      prodct.id=0;
    }
     
    this.data.forEach(category => {
      if(''+category.id==''+id){
        
        category.products.push(prodct);
      }
    });
  }
  
  addCategory(category){
    
    this.data.push({
      id: this.getNewId()+1,
      name: category,
      products: []
  });
   
  }
  editCategory(id,name){
    this.data.forEach(category => {
      if(''+category.id==id){
        category.name=name
      }
    });

  }
  editProdcut(product,id){
    this.data.forEach(category => {
      if(''+category.id==''+id){
      
        category.products.forEach((prod,index) => {
          if ('' + prod.id === '' + product.id) {
            category.products[index] = product;
          }
          
        });
       
    }
  }
 
    )
 
  }
 
  removeProduct(prod){
    
    this.data.forEach(category => {
      if(''+category.id==''+prod.categoryId){
        const aa = category.products.filter(id=>id.id !== prod.productId);
        category.products=aa;
    }
   }
    )
  
  }

  getAllProducts(){
   
      const productList: any[] = [];
    
      categoryMock.categories.forEach(category => {
        const categoryId = category.id;
        const categoryName = category.name;
    
        category.products.forEach(product => {
          const productId = product.id;
          const productName = product.name;
          const price = product.price;
    
          productList.push({
            categoryId: categoryId,
            categoryName: categoryName,
            productId: productId,
            productName: productName,
            price:price
          });
        });
      });
    
      return productList;
    
  }

  removeCategory(cid){
     const dta= this.data.filter(id=>{
     console.log(id.id!=cid,id,cid)
      return id.id!=cid
      
    });
     
    this.data=dta;
    
  
  }


}
