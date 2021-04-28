import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product_id: string;
  product_info: ProductModel = {
    name: '',
    price: 0,
    description: '',
    discount: 0,
    id: -1,
    image_url: 'https://via.placeholder.com/200',
    quantity: '0',
  };

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.product_id = params['product_id'];
      if (this.product_id) {
        this.product_info = await this.dashboardService.getProductById(
          this.product_id
        );
      }
    });
  }

  async addProduct() {
    if (!this.isValidProduct) return alert('Product Info not Valid');
    if (this.product_info.id > 0) {
      const response = await this.dashboardService.modifyProduct(this.product_info);
      console.log(response)
    } else {
      this.product_info.id = Math.floor(Math.random() * 99) + 1;
      const response = await this.dashboardService.addProduct(this.product_info);
      console.log(response)
    }
  }

  isValidProduct(): boolean {
    let isValid = false;
    if (
      this.product_info.name.length > 0 &&
      this.product_info.price > 0 &&
      this.product_info.description.length > 0 &&
      this.product_info.discount >= 0 &&
      parseInt(this.product_info.quantity) >= 0
    ) {
      isValid = true;
    }
    return isValid;
  }
}
