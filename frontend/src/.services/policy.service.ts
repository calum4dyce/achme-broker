import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  apiUrl = "http://localhost:8000/api/policies/all";
  constructor(private http: HttpClient) { }

  getPolicies() {
    return this.http.get(this.apiUrl);
  }
}
