import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app" class="justify-items-center mt-16">
      <app-email-form></app-email-form>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
