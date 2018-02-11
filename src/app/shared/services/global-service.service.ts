import { Injectable } from '@angular/core';

@Injectable()
export class GlobalServiceService {

  constructor() {
    console.log('GLOBAL SERVICE INITIALIZED');
  }

  call(caller: any) {
    console.log('global service call by', caller);
  }

}
