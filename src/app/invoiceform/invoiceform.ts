import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {InvoiceService} from '../invoice.service';
import {Approval} from '../approval.model';

@Component({
  selector: 'app-invoiceform',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './invoiceform.html',
  styleUrl: './invoiceform.css'

})
export class Invoiceform implements OnInit {
  userData = {
    name: '',
    number: '',
    item: '',
    date: new Date(),
    itemprice: 0,
    amount: 0,
    approvable: false
  };
  successMessage: string | null = null;

  constructor(private InvoiceService: InvoiceService,private router: Router) {}
  ngOnInit() {}



  onSubmit(form: NgForm) {
    if (form.valid) {
      this.InvoiceService.createInvoice(this.userData).subscribe({
        next: response => {
          this.successMessage = 'Successfully submitted!';
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['/']);
          }, 2000);
          console.log('Invoice Form submitted successfully:', response);
        },
        error: err => {
          console.log('Error Submitting Invoice Form:', err);
        }
      });
    } else {
      console.log('Form is invalid.');
    }
  }


}
