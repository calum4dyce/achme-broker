import {Component, OnInit} from '@angular/core';
import { PolicyService} from "../.services/policy.service";
import {Policy} from "../.models/policy.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  active = 'top';
  policies: Policy[];
  activeID = [];
  constructor(private policyService: PolicyService) {
  }
  ngOnInit() {
    this.policyService.getPolicies().subscribe( data => {
      this.policies = data;
      console.log(this.policies);
    });
  }

  allIDs() {
    let output = [];
    this.policies.forEach(policy => {
      output.push('policy' + policy.id);
    });
    console.log(output);
    return output;
  }
}
