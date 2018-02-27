import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModuleSpecificService {

  private _options = new BehaviorSubject<string[]>([]);
  private _selectedOption$ = new BehaviorSubject<string>('GAME');

  constructor() {
  }

  set options(options: string[]) {
    this._options.next(options);
  }

  get options$() {
    return this._options.asObservable();
  }

  get selectedOption$() {
    return this._selectedOption$.asObservable();
  }

  set selectedOption(option: string) {
    this._selectedOption$.next(option);
  }

}
