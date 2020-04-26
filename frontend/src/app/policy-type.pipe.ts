import { Pipe, PipeTransform } from '@angular/core';
import {Policy} from "../.models/policy.model";

@Pipe({
  name: 'policyType'
})
export class PolicyTypePipe implements PipeTransform {

  transform(policies: Policy[], policyType: string): Policy[] {
    if (!policies) {
      return [];
    } else if (!policyType || policyType === 'default') {
      return policies;
    } else {
      return policies.filter(policy => {
        if (policy.policyType === policyType) {
          return policy;
        }
      })
    }
  }

}
