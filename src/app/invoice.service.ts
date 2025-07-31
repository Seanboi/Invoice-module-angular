import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './invoice.model';
import {Approval, ApprovalStatus} from './approval.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  private apiUrl = 'http://localhost:8080/api/v1/Invoice';

  constructor(private http: HttpClient) { }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.apiUrl}/invoice/create`, invoice);
  }


}
