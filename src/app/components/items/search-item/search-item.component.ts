import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  item:any;
  constructor(private route: ActivatedRoute, private _mercadoLibreService:MercadoLibreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._mercadoLibreService.getItemById(params['itemId']).subscribe((response:any) =>{
        console.log(response);
        this.item = response;
      });
    });
  }

}
