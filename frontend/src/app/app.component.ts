import {Component, OnInit} from '@angular/core';
import { PolicyService} from "../.services/policy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  active = 'top';

  constructor(private policyService: PolicyService) {
  }
  ngOnInit() {
    this.policyService.getPolicies().subscribe( data => {
      console.log(data);
    });
  }
}
