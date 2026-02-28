import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  /** All service keys used in i18n (services.<key>.title / .description) */
  readonly serviceKeys = [
    'filtration',
    'designConsultation',
    'installationCommissioning',
    'waterPipes',
    'pools',
    'support',
  ] as const;
}
