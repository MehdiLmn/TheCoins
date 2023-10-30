import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICrypto } from '../Interface/crypto';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  url = 'https://api.coincap.io/v2/assets';

  constructor(private http: HttpClient) { }

  getCryptos(){
    return this.http.get<{data: ICrypto[]}>(this.url).pipe(map(response => {
      if (response && response.data) {
        response.data.forEach(crypto => {
          crypto.symbol = crypto.symbol.toLowerCase();
        });
    }
    return response.data;
  })
    );
}

}
