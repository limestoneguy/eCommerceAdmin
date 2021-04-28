import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product_details') product_details: ProductModel = {
    description: '',
    discount: 0,
    id: -1,
    image_url: '',
    name: '',
    price: 0,
    quantity: '1',
  };
  @Output('delete_event') delete_event = new EventEmitter<boolean>();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  async deleteProduct() {
    const response = await this.dashboardService.deleteProduct(
      this.product_details.id
    );

    this.delete_event.emit(response);
  }
}
