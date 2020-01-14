import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { from } from "rxjs";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { MyUpperPipe } from "./products/myUpper.pipe";
import { DiscountPipe } from "./products/discount.pipe";
import { MySearchPipe } from "./products/search.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from './products/product.service';
import { ProductComponent } from "./products/product.component";
import { HomepipePipe } from './home/homepipe.pipe';
import { OrdersComponent } from './orders/orders.component';
import { OrderserviceService } from './orders/orderservice.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    MySearchPipe,
    StarComponent,
    HomepipePipe,
    OrdersComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, OrderserviceService]
})
export class AppModule {}
