import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  itemCtrl = new FormControl('', []);
  items:Array<any> = [];
  constructor(private _mercadoLibreService:MercadoLibreService) { }

  ngOnInit(): void {
  }

  getItems(event:Event){
    event.preventDefault();
    console.log(this.itemCtrl.value);
    this._mercadoLibreService.getItems(this.itemCtrl.value).subscribe((response:any) =>{
      console.log(response.results);
      this.items = response.results;
    });
  }

}
