import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="header-content">
          <div class="logo">
            <img class="logo-image" src="sheetgenie-logo.svg" alt="SheetGenie logo">
            <span class="logo-text">SheetGenie</span>
          </div>
          <span class="tagline">Precision worksheets for every learner</span>
        </div>
      </header>
      <main class="app-main">
        <router-outlet></router-outlet>
      </main>
      <footer class="app-footer">
        <span>&copy; 2026 Worksheet Generator &mdash; Empowering Educators</span>
      </footer>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SheetGenie';
}
