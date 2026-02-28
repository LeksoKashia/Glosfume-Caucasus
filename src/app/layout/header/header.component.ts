import { ChangeDetectorRef, Component, ElementRef, HostListener, PLATFORM_ID, ViewChild, afterNextRender, inject } from '@angular/core';
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
  @ViewChild('langDropdown') dropdownRef?: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);
  /** True after first paint in the browser; avoids SSR/hydration showing both theme icons. */
  showThemeIcon = false;

  isMenuOpen = false;
  langDropdownOpen = false;
  readonly languages = [
    { code: 'en', label: 'EN' },
    { code: 'ka', label: 'ქართ' },
    { code: 'ru', label: 'RU' },
  ] as const;

  currentLangLabel(): string {
    const cur = this.translate.currentLang;
    const found = this.languages.find((l) => l.code === cur);
    return found ? found.label : 'EN';
  }

  toggleLangDropdown(): void {
    this.langDropdownOpen = !this.langDropdownOpen;
  }

  selectLang(code: string): void {
    this.setLang(code);
    this.langDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (
      this.langDropdownOpen &&
      this.dropdownRef?.nativeElement &&
      !this.dropdownRef.nativeElement.contains(e.target as Node)
    ) {
      this.langDropdownOpen = false;
      this.cdr.markForCheck();
    }
  }

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
        translate.use('ka');
      }
    } else {
      translate.use('ka');
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
