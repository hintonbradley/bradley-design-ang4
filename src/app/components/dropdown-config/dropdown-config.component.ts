import {Component} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-config',
  templateUrl: './dropdown-config.component.html',
  styleUrls: ['./dropdown-config.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class DropdownConfigComponent {

  constructor(config: NgbDropdownConfig) { 
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}