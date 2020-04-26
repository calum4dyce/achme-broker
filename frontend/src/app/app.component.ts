import {Component, OnInit, ViewChild} from '@angular/core';
import { PolicyService} from "../.services/policy.service";
import {Policy} from "../.models/policy.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  policies: Policy[];
  policyTypes = new Set();
  selectedPolicyType: string = 'default';
  constructor(private policyService: PolicyService) {
  }

  ngOnInit() {
    //Get policy data from backend
    this.policyService.getPolicies().subscribe( data => {
      this.policies = data;

      // Adds each policy type to policyTypes set so there are no duplicates.
      this.policies.forEach(policy => {
        this.policyTypes.add(policy.policyType);
      })
    });

  }

}
