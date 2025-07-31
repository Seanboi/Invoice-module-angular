import { RouterModule,Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Viewdocuments} from './viewdocuments/viewdocuments';
import { Documentmenu } from './documentmenu/documentmenu'
import { Invoiceform} from './invoiceform/invoiceform';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'document-menu', component: Documentmenu },
  { path: 'invoice-form', component: Invoiceform },
  { path: 'view-documents', component: Viewdocuments},
  { path: '**', redirectTo: '' }
];
