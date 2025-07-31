import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-documentmenu',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './documentmenu.html',
  styleUrl: './documentmenu.css'
})
export class Documentmenu {
  protected = Documentmenu;
}
