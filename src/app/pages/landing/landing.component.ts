import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, OnDestroy {
  /** Only 3 services shown on landing; full list is on the services page. */
  readonly serviceKeys = [
    'filtration',
    'designConsultation',
    'installationCommissioning',
  ] as const;

  currentReviewIndex = 0;
  readonly totalReviews = 4;
  /** On mobile, quote can be expanded to show full text. Reset when changing review. */
  reviewQuoteExpanded = false;
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private readonly autoPlayDelayMs = 6500;

  toggleReviewQuote(): void {
    this.reviewQuoteExpanded = !this.reviewQuoteExpanded;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private translate: TranslateService,
  ) {}

  getReviewAvatar(reviewKey: string): string | null {
    const avatar = this.translate.instant(
      'home.reviews.' + reviewKey + '.avatar',
    );
    return typeof avatar === 'string' && avatar.length > 0 ? avatar : null;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.currentReviewIndex =
        (this.currentReviewIndex + 1) % this.totalReviews;
    }, this.autoPlayDelayMs);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  get currentReviewKey(): string {
    return 'review' + (this.currentReviewIndex + 1);
  }

  next(): void {
    this.reviewQuoteExpanded = false;
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.totalReviews;
    if (isPlatformBrowser(this.platformId)) this.startAutoPlay();
  }

  prev(): void {
    this.reviewQuoteExpanded = false;
    this.currentReviewIndex =
      (this.currentReviewIndex - 1 + this.totalReviews) % this.totalReviews;
    if (isPlatformBrowser(this.platformId)) this.startAutoPlay();
  }

  goTo(index: number): void {
    if (index === this.currentReviewIndex) return;
    this.reviewQuoteExpanded = false;
    this.currentReviewIndex = index;
    if (isPlatformBrowser(this.platformId)) this.startAutoPlay();
  }
}
