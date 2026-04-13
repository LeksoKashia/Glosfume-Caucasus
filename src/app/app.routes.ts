import { Routes } from '@angular/router';
import { SeoData } from './services/seo.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (m) => m.LandingComponent,
      ),
    data: {
      seo: {
        title:
          'Glosfume Caucasus — Industrial Filtration & Engineering Solutions',
        description:
          'Glosfume Caucasus delivers high-performance ceramic filtration systems, installation, and engineering solutions across the Caucasus region. Emissions below 5 mg/Nm³ guaranteed.',
        url: '/',
      } satisfies SeoData,
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent,
      ),
    data: {
      seo: {
        title: 'Our Services — Filtration, Installation & Engineering',
        description:
          'Glosfume Caucasus services: ceramic filtration systems, design & consultation, installation & commissioning, water pipes, pool systems, and ongoing support.',
        url: '/services',
      } satisfies SeoData,
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: {
      seo: {
        title: 'About Glosfume Caucasus — Our Story & Values',
        description:
          'Learn about Glosfume Caucasus — our story, values, and commitment to bringing excellence and reliability to the Caucasus region.',
        url: '/about',
      } satisfies SeoData,
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    data: {
      seo: {
        title: 'Contact Glosfume Caucasus — Tbilisi, Georgia',
        description:
          'Get in touch with Glosfume Caucasus. Reach us by email at info@glosfume-caucasus.com or call us. Based in Tbilisi, Georgia.',
        url: '/contact',
      } satisfies SeoData,
    },
  },
  {
    path: 'technologies',
    loadComponent: () =>
      import('./pages/technologies/technologies.component').then(
        (m) => m.TechnologiesComponent,
      ),
    data: {
      seo: {
        title: 'Glosfume Filtration Technologies — Ceramic Sleeves & Media',
        description:
          'Explore Glosfume Caucasus filtration technology — microporous and catalytic ceramic sleeves, nanometric filtering media, and operating principles.',
        url: '/technologies',
      } satisfies SeoData,
    },
  },
  {
    path: 'prices',
    loadComponent: () =>
      import('./pages/prices/prices.component').then((m) => m.PricesComponent),
    data: {
      seo: {
        title: 'Glosfume Caucasus Filter Prices & Options',
        description:
          'View Glosfume Caucasus prices for filter models, compressors, and optional components. Detailed pricing with available discounts.',
        url: '/prices',
      } satisfies SeoData,
    },
  },
  { path: '**', redirectTo: '' },
];
