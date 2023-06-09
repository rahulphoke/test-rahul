import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CategoryCrudComponent } from './category-crud/category-crud.component';
import { ProdcutCrudComponent } from './prodcut-crud/prodcut-crud.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {"path":'home',component:HomeComponent}, 
  {"path":'categories',component:CategoriesComponent},
  {"path":'categories/new',component:CategoryCrudComponent},
  {"path":'categories/:id/edit',component:CategoryCrudComponent},
  {"path":'products/new',component:ProdcutCrudComponent},
  {"path":'products/:id/:cid/edit',component:ProdcutCrudComponent},
  {"path":'products',component:ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
