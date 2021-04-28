import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { ProductInfoComponent } from './screens/admin/product-info/product-info.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'product-info', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
