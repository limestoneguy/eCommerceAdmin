import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // allProducts = [
  //   {
  //     id: 11,
  //     name: 'Samsung S1',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 45000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 1,
  //     name: 'Samsung S2',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 50000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 2,
  //     name: 'Samsung S3',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 55000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 3,
  //     name: 'Samsung S4',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 6000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Samsung S5',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 65000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 5,
  //     name: 'Samsung S6',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 70000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 6,
  //     name: 'Samsung S7',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 75000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 7,
  //     name: 'Samsung S8',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 80000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 8,
  //     name: 'Samsung S9',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 85000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 9,
  //     name: 'Samsung S10',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 90000,
  //     quantity: '3',
  //   },
  //   {
  //     id: 10,
  //     name: 'Samsung S11',
  //     description: 'Great Phone To use',
  //     discount: 50,
  //     image_url: 'https://via.placeholder.com/200',
  //     price: 100000,
  //     quantity: '3',
  //   },
  // ];

  getAllProducts(): Observable<ProductModel[]> {
    const url = 'https://mockend.com/limestoneguy/eCommerceAdmin/products';
    const response = this.httpClient.get<ProductModel[]>(url);
    return response;
  }

  async addProduct(productDetails: ProductModel): Promise<number> {
    // Mockend API does not allow adding a new product
    return 0;
  }

  async deleteProduct(productId: number): Promise<boolean> {
    // mock server doesnot allow product deletion
    return true;
  }

  async modifyProduct(productDetails: ProductModel): Promise<boolean> {
    // mock server does not allow modifying product yet
    return true;
  }

  async getProductById(product_id): Promise<ProductModel> {
    const url = 'https://mockend.com/limestoneguy/eCommerceAdmin/products';
    const response = await this.httpClient
      .get<ProductModel[]>(url, { params: { id_eq: product_id } })
      .toPromise();
    console.log(response);
    return response[0];
  }

  constructor(private httpClient: HttpClient) {}
}
