import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SeoService, SeoData } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        const seoData: SeoData | undefined = data['seo'];
        if (seoData) {
          this.seo.update(seoData);
        }
      });
  }
}
