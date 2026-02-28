import { ChangeDetectorRef, Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);
  /** True after first paint in the browser; avoids SSR/hydration showing both theme icons. */
  showThemeIcon = false;

  isMenuOpen = false;
  readonly languages = [
    { code: 'en', label: 'EN' },
    { code: 'ka', label: 'ქართ' },
    { code: 'ru', label: 'RU' },
  ] as const;

  constructor(
    public theme: ThemeService,
    public translate: TranslateService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        this.showThemeIcon = true;
        this.cdr.markForCheck();
      });
    }
    translate.addLangs(['en', 'ka', 'ru']);
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('glosfume-lang');
      if (stored && ['en', 'ka', 'ru'].includes(stored)) {
        translate.use(stored);
      } else {
        const browser = translate.getBrowserLang();
        const use =
          browser && ['en', 'ka', 'ru'].includes(browser) ? browser : 'en';
        translate.use(use);
      }
    } else {
      translate.use('en');
    }
  }

  setLang(code: string): void {
    this.translate.use(code);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('glosfume-lang', code);
    }
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
