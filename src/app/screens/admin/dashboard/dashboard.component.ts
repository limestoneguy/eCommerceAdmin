import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productList: ProductModel[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts():Promise<void>{
    this.productList = await this.dashboardService.getAllProducts();
  }

  async
}
