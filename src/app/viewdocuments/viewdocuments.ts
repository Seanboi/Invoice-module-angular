import { Component,OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router'
import {Approval} from '../approval.model';
import {ApprovalService} from '../approval.service';

@Component({
  selector: 'app-viewdocuments',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './viewdocuments.html',
  styleUrl: './viewdocuments.css'
})
export class Viewdocuments implements OnInit {


  approvals: Approval[] = [];
  selectedFilter = 'all';

  constructor(private approvalService: ApprovalService) {}

  ngOnInit(): void {
    this.onFilterChange();
  }

  onFilterChange(): void {
    this.loadApprovals();
  }

  loadApprovals(): void {
    switch (this.selectedFilter) {
      case 'pending':
        this.approvalService.getPendingApprovals().subscribe(data => this.approvals = data);
        break;
      case 'approved':
        this.approvalService.getApprovedApprovals().subscribe(data => this.approvals = data);
        break;
      case 'rejected':
        this.approvalService.getRejectedApprovals().subscribe(data => this.approvals = data);
        break;
      default:
        this.approvalService.getAllApprovals().subscribe(data => this.approvals = data);
    }
  }

  viewPayload(payload: string): void {
    alert(JSON.stringify(JSON.parse(payload), null, 2)); // Pretty JSON
  }
}


