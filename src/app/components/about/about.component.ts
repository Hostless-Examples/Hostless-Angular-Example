import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="page-header">
        <h1>About Us</h1>
        <p class="page-subtitle">Learn more about our mission and values</p>
      </div>
      
      <div class="about-content">
        <div class="card">
          <h2>Our Mission</h2>
          <p>We are dedicated to creating innovative web applications that provide exceptional user experiences. Our Angular-based solutions combine modern technology with intuitive design to deliver powerful, scalable applications.</p>
        </div>
        
        <div class="card">
          <h2>Our Values</h2>
          <ul class="values-list">
            <li><strong>Innovation:</strong> We embrace cutting-edge technologies and creative solutions</li>
            <li><strong>Quality:</strong> We maintain the highest standards in everything we build</li>
            <li><strong>User-Centric:</strong> Our users' needs and experiences drive our development process</li>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and open communication</li>
          </ul>
        </div>
        
        <div class="card">
          <h2>Our Technology Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h4>Angular</h4>
              <p>Modern frontend framework for building scalable applications</p>
            </div>
            <div class="tech-item">
              <h4>TypeScript</h4>
              <p>Type-safe JavaScript for better development experience</p>
            </div>
            <div class="tech-item">
              <h4>CSS3</h4>
              <p>Modern styling with responsive design principles</p>
            </div>
            <div class="tech-item">
              <h4>RxJS</h4>
              <p>Reactive programming for handling asynchronous operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      text-align: center;
      padding: 2rem 0;
      background-color: #f8f9fa;
      border-radius: 10px;
      margin-bottom: 2rem;
    }
    
    .page-header h1 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .page-subtitle {
      color: #666;
      font-size: 1.1rem;
    }
    
    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .card h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    
    .card p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .values-list {
      list-style: none;
      padding: 0;
    }
    
    .values-list li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
    
    .values-list li:last-child {
      border-bottom: none;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }
    
    .tech-item {
      text-align: center;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }
    
    .tech-item h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
    
    .tech-item p {
      color: #666;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }
      
      .tech-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}
