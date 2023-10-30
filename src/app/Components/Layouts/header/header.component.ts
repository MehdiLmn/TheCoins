import { Component, PipeTransform } from '@angular/core';
import { ICrypto } from 'src/app/Interface/crypto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements PipeTransform {

  cryptos: ICrypto[] = [];
  searchFilter: string = "";

  transform(cryptos: ICrypto[], searchTerm: string): ICrypto[] {
    return cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
