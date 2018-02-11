import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-reusable-component1',
  templateUrl: './reusable-component1.component.html',
  styleUrls: ['./reusable-component1.component.css']
})
export class ReusableComponent1Component implements OnInit {

  constructor(private globalService: GlobalServiceService) { }

  ngOnInit() {
    this.globalService.call(this);
  }

}
