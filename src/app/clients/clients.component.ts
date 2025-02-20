import { Component } from '@angular/core';
import { Client } from '../client';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [FormsModule, CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {

  submitted: boolean = false;

  model: Client;

  constructor() {
    this.model = new Client(1, '', '', '', '')
  }
  // functions ----------
  onSubmit(clientform: NgForm) {
    console.log('Form submitted:', this.model);

    this.model = new Client(-1, '', '', '', '');

    clientform.resetForm()
    this.submitted = true;
  }
  newClient() {
    this.model = new Client(-1, '', '', '', '');
    this.submitted = true;
  }
}