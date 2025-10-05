import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <a routerLink="/home" class="brand-link">Angular App</a>
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <a routerLink="/home" 
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}"
               class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" 
               routerLinkActive="active" 
               class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a routerLink="/products" 
               routerLinkActive="active" 
               class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a routerLink="/contact" 
               routerLinkActive="active" 
               class="nav-link">Contact</a>
          </li>
        </ul>
        <div class="nav-toggle" (click)="toggleMenu()">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #2c3e50;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .brand-link {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-item {
      margin-left: 2rem;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    
    .nav-link:hover,
    .nav-link.active {
      background-color: #34495e;
    }
    
    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    
    .hamburger {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 3px 0;
      transition: 0.3s;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: #2c3e50;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
        padding: 2rem 0;
      }
      
      .nav-menu.active {
        left: 0;
      }
      
      .nav-item {
        margin: 1rem 0;
      }
      
      .nav-toggle {
        display: flex;
      }
    }
  `]
})
export class NavigationComponent {
  toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu?.classList.toggle('active');
  }
}
