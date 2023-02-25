import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'admin', component: AdminComponent
  },
  {
    path:'adminlogin', component:AdminLoginComponent,
    canActivate:[AuthGuard]
    
  },
  {path:'updateproduct/:id', component: UpdateProductComponent},

  
  {
    path:'addproduct', component: AdminAddProductComponent
  },
  {path:'productlist',component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
