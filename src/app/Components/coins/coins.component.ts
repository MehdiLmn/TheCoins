import { Component, OnInit } from '@angular/core';
import { ICrypto } from 'src/app/Interface/crypto';
import { CryptoService } from 'src/app/Services/crypto.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  cryptos: ICrypto[] = [];
  coinParent: ICrypto | undefined;
  searchFilter: string = "";

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.getCryptos();
  }

  getCryptos(): void {
    this.cryptoService.getCryptos().subscribe(data => {
      this.cryptos = data;
    });
  }

  selectCrypto(coin:ICrypto){
    this.coinParent = coin;
  }

}
