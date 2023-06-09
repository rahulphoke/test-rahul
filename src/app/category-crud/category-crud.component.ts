import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from '../mock.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent implements OnInit {
  categoryName: string;
  categoryId;
  categoryForm:FormGroup;
  action;
  constructor(private route:ActivatedRoute,private fb: FormBuilder,private mockServ:MockService,private router:Router) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryName: ''
    });
   this.route.params.subscribe(params=>{
    const editId= params.id;
    this.categoryId= editId;
    this.action= this.route.snapshot.url[2]?this.route.snapshot.url[2].path:'add';
    if(this.action=='edit'){
      this.prefillData(editId);
    }
   })
    
  }
  prefillData(editId){

   const category= this.mockServ.data.filter(id=>''+id.id===editId)
   this.categoryForm.get('categoryName').setValue(category[0].name);

  }

  udpate() {
   this.mockServ.editCategory(this.categoryId,this.categoryForm.get('categoryName').value)
   this.router.navigate([`/categories`]);
  }
  save(){
    if(this.action=="edit"){
      this.udpate();
    }else{
      this.addNew();
    }
  }
  addNew(){
    this.mockServ.addCategory(this.categoryForm.get('categoryName').value);
    this.router.navigate([`/categories`]);
  }

  reset() {
    this.categoryForm.reset();
  }

}
