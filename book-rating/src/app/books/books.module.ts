import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    // Kindmodule müssen CommonModule importieren
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
