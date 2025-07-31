import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  protected = Homepage;
}
