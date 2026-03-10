import {
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
  computed,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'glosfume-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeSignal = signal<Theme>(this.loadInitialTheme());

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      const theme = this.themeSignal();
      if (!document.documentElement.hasAttribute('data-theme')) {
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  }

  private loadInitialTheme(): Theme {
    // Light mode only for now; dark mode styles kept for future use.
    if (!isPlatformBrowser(this.platformId)) return 'light';
    if (typeof document === 'undefined') return 'light';
    return 'light';
  }

  setTheme(value: Theme): void {
    this.themeSignal.set(value);
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value);
    }
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // ignore
      }
    }
  }

  toggleTheme(): void {
    this.setTheme(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }
}
