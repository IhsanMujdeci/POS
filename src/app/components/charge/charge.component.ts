import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss'],
})
export class ChargeComponent {
  @Input() amount: number;
  @Input() disabled: boolean;
}
