import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UtilsService } from '../services/utils.service'
import { Router } from '@angular/router';
import { Crypto } from '../interfaces/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  form: any;

  clickEx: any = {
    status: false
  };

  btc: any = {
    status: true,
    value: 13197
  };

  usd: any = {
    status: false,
    value: 1
  };
  
  list: Crypto[];
    
  constructor(activatedRoute: ActivatedRoute) { 

    let coin1: Crypto = {
      type: "BTC",
      value: 13716.101
    };

    let coin2: Crypto = {
      type: "ETH",
      value: 392.1447
    };

    let coin3: Crypto = {
      type: "USDT",
      value: 1.0017
    };
    let coin4: Crypto = {
      type: "XRP",
      value: 0.23970284
    };
    let coin5: Crypto = {
      type: "BCH",
      value: 269.207
    };
    let coin6: Crypto = {
      type: "LINK",
      value: 11.2173
    };
    let coin7: Crypto = {
      type: "LTC",
      value: 55.8452
    };
    let coin8: Crypto = {
      type: "BNB",
      value: 28.2352
    };
    let coin9: Crypto = {
      type: "BCHSV",
      value: 164.679
    };
    let coin10: Crypto = {
      type: "USDC",
      value: 1.0034
    };
    let coin11: Crypto = {
      type: "BWETH",
      value: 392.3282
    };
    let coin12: Crypto = {
      type: "ADA",
      value: 0.09636641
    };
    let coin13: Crypto = {
      type: "EOS",
      value: 2.5136
    };
    let coin14: Crypto = {
      type: "XMR",
      value: 124.3157
    };
    let coin15: Crypto = {
      type: "TRX",
      value: 0.0257748
    };
    let coin16: Crypto = {
      type: "WBTC",
      value: 13878.1946
    };
    let coin17: Crypto = {
      type: "XLM",
      value: 0.07783128
    };
    let coin18: Crypto = {
      type: "XTZ",
      value: 1.9446
    };
    let coin19: Crypto = {
      type: "LEO",
      value: 1.2653
    };
    let coin20: Crypto = {
      type: "DOT",
      value: 4.154
    };
    this.list = [coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15, coin16, coin17, coin18, coin19, coin20];
  }

  ngOnInit(): void {
  }

  exchange(data) {
    this.clickEx.status = true;
    console.log("HomeComponent -> exchange -> data", data)
    this.usd.status = false;
  }


}
