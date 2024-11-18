import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent {
  emailForm: FormGroup;
  isComplete: boolean = false;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleSubmit(): void {
    if (this.emailForm.valid) {
      this.isComplete = true;

      // Clear the form input
      this.emailForm.reset();

      // Clear the "Complete" message after 5 seconds
      setTimeout(() => {
        this.isComplete = false;
      }, 5000);
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
