import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  /** Only 3 services shown on landing; full list is on the services page. */
  readonly serviceKeys = ['filtration', 'waterPipes', 'pools'] as const;

  readonly partners = [
    { id: 'partner1', logo: '/assets/partner1.svg' },
    { id: 'partner2', logo: '/assets/partner2.svg' },
    { id: 'partner3', logo: '/assets/partner3.svg' },
  ];
}
