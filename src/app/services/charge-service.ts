import {Injectable} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import { Subject } from 'rxjs';
import WebsocketEventInterface from '../models/websocket.interface';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  chargeSubject: Subject<any>;

  constructor() {
    this.chargeSubject = webSocket('ws://demos.kaazing.com/echo');
  }

  async submit(event: WebsocketEventInterface) {
    this.chargeSubject.next(JSON.stringify(event));
  }
}
