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
    if (!isPlatformBrowser(this.platformId)) return 'light';
    if (typeof document === 'undefined') return 'light';
    const fromDoc = document.documentElement.getAttribute('data-theme');
    if (fromDoc === 'light' || fromDoc === 'dark') return fromDoc;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {
      // ignore
    }
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
