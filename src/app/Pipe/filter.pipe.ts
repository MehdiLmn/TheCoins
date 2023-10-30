import { Pipe, PipeTransform } from '@angular/core';
import { ICrypto } from '../Interface/crypto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cryptos: ICrypto[], searchTerm: string): ICrypto[] {
    return cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
