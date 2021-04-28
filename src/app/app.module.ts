import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { ProductCardComponent } from './screens/admin/components/product-card/product-card.component';
import { FabButtonComponent } from './screens/admin/components/fab-button/fab-button.component';
import { NavBarComponent } from './screens/admin/components/nav-bar/nav-bar.component';
import { ProductInfoComponent } from './screens/admin/product-info/product-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductCardComponent,
    FabButtonComponent,
    NavBarComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
