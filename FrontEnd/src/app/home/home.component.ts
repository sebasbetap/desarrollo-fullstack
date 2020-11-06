import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UtilsService } from '../services/utils.service'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { Crypto } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  list: Crypto[];
  typeCoin: Crypto;

  form: any;

  btc: any = {
    status: true,
    value: 13197
  };

  usd: any = {
    status: false,
    value: 1
  };
  total: number = 0;
  
  valueCoin: any;

  clickEx: any = {
    status: false
  };
 
  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group(
      {
        "amount": ['', Validators.required]
      },
      {
        "type": ['', Validators.required]
      }
    );
    this.valueCoin = this.activatedRoute.snapshot.params['value'];

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
    this.typeCoin = this.list.find( (record) => {
      return record.value == this.valueCoin;
    });
    

    /*let myUser: User = {
      name: 'Sebastian',
      lastname: 'Betancur',
      username: 'sebasbetap',
      password: 'sebas123SEBAS',
      defaultcoin: true,
      id: 1
    };
    console.log(myUser);*/
  }

  ngOnInit(): void {
    this.consumPost();
  }

  async consumPost(){
    try {
      let rs = await this.utilsService.eventPost('api/user', {}).toPromise();
      console.log("HomeComponent -> consumPost -> rs", rs)
    } catch (error) {
      console.log("HomeComponent -> consumPost -> error", error)
      
    }
  }

  eventTotal() {
    if (this.clickEx.status == true) {
        if (!!this.btc.status) {
          this.total = this.form.value.amount / this.btc.value
        } else {
          this.total = this.form.value.amount * this.btc.value
        }
      } else {
        this.total = this.form.value.amount / this.valueCoin
      }
  }

  changeMoney() {
    this.clickEx.status = true;
    this.form.get('amount').setValue(this.total);
    if (!!this.btc.status) {
      this.usd.status = true;
      this.btc.status = false;
    } else {
      this.usd.status = false;
      this.btc.status = true;
    }
    this.eventTotal();
  }

  /*exchange(data) {
    this.clickEx.status = false;
    console.log("HomeComponent -> exchange -> data", data)
    this.usd.status = false;
  }*/

}
