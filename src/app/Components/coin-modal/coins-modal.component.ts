import { Component, Input } from '@angular/core';
import { ICrypto } from 'src/app/Interface/crypto';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {

  @Input() coin: ICrypto | undefined;
}
