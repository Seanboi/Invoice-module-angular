import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Invoice } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { Approval } from './approval.model';
import { ApprovalStatus } from './approval.model';
import { ApprovalService } from './approval.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Invoice-Manage-Module';
  protected readonly Component = Component;
}
