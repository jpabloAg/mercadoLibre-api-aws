import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/items/list-items/list-items.component';
import { SearchItemComponent } from './components/items/search-item/search-item.component';

const appRoutes:Routes = [
  { path:'', component:ListItemsComponent},
  { path:'searchItem/:itemId', component:SearchItemComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
