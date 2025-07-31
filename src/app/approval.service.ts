import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Approval} from './approval.model';
import { ApprovalStatus} from './approval.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApprovalService {
private apiUrl = 'http://localhost:8080/api/v1/Approval';

constructor(private http: HttpClient) { }

  createApproval(approval: Approval): Observable<Approval> {
    return this.http.post<Approval>(`${this.apiUrl}/approvals/create`, approval);
  }

  getAllApprovals(): Observable<Approval[]> {
  return this.http.get<Approval[]>(`${this.apiUrl}/approvals`);
  }

  getPendingApprovals(): Observable<Approval[]> {
    return this.http.get<Approval[]>(`${this.apiUrl}/approvals/pending`);
  }

  getApprovedApprovals(): Observable<Approval[]> {
    return this.http.get<Approval[]>(`${this.apiUrl}/approvals/approved`);
  }

  getRejectedApprovals(): Observable<Approval[]> {
    return this.http.get<Approval[]>(`${this.apiUrl}/approvals/rejected`);
  }





}

