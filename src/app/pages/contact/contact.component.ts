import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitted = false;

  /** WhatsApp link: use format https://wa.me/995XXXXXXXXX (country code + number, no + or spaces) */
  readonly whatsappUrl = 'https://wa.me/995595036908';

  onSubmit(): void {
    this.submitted = true;
  }
}
