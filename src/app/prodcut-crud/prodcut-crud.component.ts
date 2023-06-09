import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-prodcut-crud',
  templateUrl: './prodcut-crud.component.html',
  styleUrls: ['./prodcut-crud.component.css']
})
export class ProdcutCrudComponent implements OnInit {

  constructor(private route:ActivatedRoute,private fb: FormBuilder,private mockServ:MockService,private router:Router) { }
  categoryOptions;
  productForm;
  prodcutId;
action;
  ngOnInit() {
    this.categoryOptions = this.mockServ.data.map(category => ({ label: category.name, value: category.id }));
    
    this.productForm = this.fb.group({
      category: '',
      product:'',
      price:''
    });
   this.route.params.subscribe(params=>{
    const editId= params.id;
    const cid= params.cid;
    this.prodcutId= editId;
    this.action= this.route.snapshot.url[3]?this.route.snapshot.url[3].path:'add';
    if(this.action=='edit'){
      this.prefillData(editId,cid);
    }
   })
    
  }
  prefillData(editId,cid){
  
 const cate = this.mockServ.data.filter(id=>''+id.id===''+cid);
   const prod= this.mockServ.data.filter(id=>''+id.id===''+cid)[0].products.filter(id=>''+id.id===''+editId)[0]
   this.productForm.get('category').setValue(cid);
   this.productForm.get('product').setValue(prod.name);
   this.productForm.get('price').setValue(prod.price);
  ;
  }

  udpate() {
    const prod =    {
      "id": this.prodcutId,
      "name":  this.productForm.get('product').value,
      "price": this.productForm.get('price').value
    }
     
   this.mockServ.editProdcut( prod,this.productForm.get('category').value);

   this.router.navigate([`/products`]);
  }
  save(){
    if(this.action=="edit"){
      this.udpate();
    }else{
      this.addNew();
    }
  }
  addNew(){
    const prod =    {
      
      "name":  this.productForm.get('product').value,
      "price": this.productForm.get('price').value
    }
   
    this.mockServ.addProducts(prod,this.productForm.get('category').value);
   
    this.router.navigate([`/products`]);
  }

  reset() {
    this.productForm.reset();
  }

}
