import { Component } from '@angular/core';
import { Meeting } from '../meeting';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meetings',
  imports: [FormsModule,CommonModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
  submitted: boolean = false;

  model: Meeting;

  constructor(){
    this.model = new Meeting('',2, new Date());
  }
  //funtions --------
  // onSubmit(meetingForm: NgForm) {
  //   console.log(this.model);

  //   this.model = new Meeting ('',2, new Date);

  //   meetingForm.resetForm();
  //   this.submitted = false;
  // }
  // newMeeting() {
  //   this.model = new Meeting ('',2, new Date);
  //   this.submitted = false;
  // }

  onSubmit(meetingForm: NgForm) {
      console.log('Form submitted:', {
        topic: this.model.topic, 
        numberOfPeople: this.model.numberOfPeople, 
        startTime: this.model.startTime});

      // Reset the form and model after submission
      this.model = new Meeting('', 2, new Date());
      meetingForm.resetForm();
      this.submitted = true;
   
  }

  // Reset the form for a new meeting
  newMeeting() {
    this.model = new Meeting('', 2, new Date()); // Reset model to default
    this.submitted = false;
  }


}
