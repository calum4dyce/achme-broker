import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Policy} from "../.models/policy.model";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  apiUrl = "http://localhost:8000/api/policies/all";
  constructor(private http: HttpClient) { }

  getPolicies() {
    return this.http.get<Policy[]>(this.apiUrl);
  }
}
