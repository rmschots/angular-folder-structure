import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-reusable-component2',
  templateUrl: './reusable-component2.component.html',
  styleUrls: ['./reusable-component2.component.css']
})
export class ReusableComponent2Component implements OnInit {

  constructor(private globalService: GlobalServiceService) { }

  ngOnInit() {
    this.globalService.call(this);
  }

}
