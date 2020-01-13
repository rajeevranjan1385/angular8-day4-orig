import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { from } from "rxjs";
import { ProductComponent } from "./products/product.component";
import { FormsModule } from "@angular/forms";
import { MyUpperPipe } from "./products/myUpper.pipe";
import { DiscountPipe } from "./products/discount.pipe";
import { MySearchPipe } from "./products/search.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from './products/product.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    MySearchPipe,
    StarComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
