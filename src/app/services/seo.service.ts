import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  url?: string;
}

const SITE_NAME = 'Glosfume Caucasus';
const BASE_URL = 'https://www.glosfume-caucasus.com';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(data: SeoData): void {
    const fullTitle = `${data.title} | ${SITE_NAME}`;
    const url = data.url ? `${BASE_URL}${data.url}` : BASE_URL;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });

    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    const link: HTMLLinkElement =
      this.doc.querySelector('link[rel="canonical"]') ??
      this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    if (!link.parentElement) {
      this.doc.head.appendChild(link);
    }
  }
}
