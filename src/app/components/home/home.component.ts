import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="hero-section">
        <h1>Welcome to Our Angular App</h1>
        <p class="hero-subtitle">A modern single-page application with dynamic navigation</p>
        <div class="hero-buttons">
          <a routerLink="/products" class="btn">Explore Products</a>
          <a routerLink="/about" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
      
      <div class="features-section">
        <h2 class="text-center mb-20">Key Features</h2>
        <div class="features-grid">
          <div class="card">
            <h3>Dynamic Routing</h3>
            <p>Navigate seamlessly between different pages using Angular Router with clean URLs and browser history support.</p>
          </div>
          <div class="card">
            <h3>Responsive Design</h3>
            <p>Mobile-first approach ensures your app looks great on all devices, from phones to desktops.</p>
          </div>
          <div class="card">
            <h3>Modern Architecture</h3>
            <p>Built with Angular 17+ using standalone components and the latest best practices for maintainable code.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      text-align: center;
      padding: 4rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin-bottom: 3rem;
      border-radius: 10px;
    }
    
    .hero-section h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 300;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .features-section h2 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .card p {
      color: #666;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}
