import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { RowComponent } from './components/row/row.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartInfoComponent } from './components/cart-info/cart-info.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, CardComponent, RowComponent, CartInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
