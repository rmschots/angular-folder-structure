import { Component, OnInit } from '@angular/core';
import { ModuleSpecificService } from '../../shared/services/module-specific.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _moduleSpecificService: ModuleSpecificService) {
  }

  ngOnInit() {
    this._moduleSpecificService.options = ['GAME', 'GRAPHICS', 'KEY BINDINGS'];
  }

  get activeOption$() {
    return this._moduleSpecificService.selectedOption$;
  }

  set selectedOption(option: string) {
    this._moduleSpecificService.selectedOption = option;
  }

  get options$() {
    return this._moduleSpecificService.options$;
  }

}
