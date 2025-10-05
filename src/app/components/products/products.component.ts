import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Our Products</h1>
        <p class="page-subtitle">Discover our amazing collection of products</p>
      </div>
      
      <div class="filter-section">
        <div class="filter-buttons">
          <button 
            *ngFor="let category of categories" 
            (click)="filterByCategory(category)"
            [class.active]="selectedCategory === category"
            class="filter-btn">
            {{ category }}
          </button>
        </div>
      </div>
      
      <div class="products-grid">
        <div 
          *ngFor="let product of filteredProducts" 
          class="product-card">
          <div class="product-image">
            <div class="image-placeholder">{{ product.name.charAt(0) }}</div>
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-meta">
              <span class="product-category">{{ product.category }}</span>
              <span class="product-price">{{ product.price }}</span>
            </div>
            <button class="btn product-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      
      <div *ngIf="filteredProducts.length === 0" class="no-products">
        <p>No products found in this category.</p>
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
    
    .filter-section {
      margin-bottom: 2rem;
    }
    
    .filter-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 0.5rem 1rem;
      border: 2px solid #007bff;
      background-color: white;
      color: #007bff;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      background-color: #007bff;
      color: white;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .product-card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
    
    .product-image {
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .image-placeholder {
      width: 80px;
      height: 80px;
      background-color: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }
    
    .product-info {
      padding: 1.5rem;
    }
    
    .product-name {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }
    
    .product-description {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    .product-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .product-category {
      background-color: #e9ecef;
      color: #495057;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
    }
    
    .product-price {
      font-size: 1.2rem;
      font-weight: bold;
      color: #28a745;
    }
    
    .product-btn {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
    }
    
    .no-products {
      text-align: center;
      padding: 3rem;
      color: #666;
    }
    
    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 2rem;
      }
      
      .products-grid {
        grid-template-columns: 1fr;
      }
      
      .filter-buttons {
        justify-content: center;
      }
    }
  `]
})
export class ProductsComponent {
  selectedCategory = 'All';
  
  categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home'];
  
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Pro',
      description: 'Latest smartphone with advanced features and long-lasting battery.',
      price: 699,
      image: 'smartphone.jpg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 199,
      image: 'headphones.jpg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Designer T-Shirt',
      description: 'Comfortable cotton t-shirt with modern design.',
      price: 29,
      image: 'tshirt.jpg',
      category: 'Clothing'
    },
    {
      id: 4,
      name: 'Programming Guide',
      description: 'Comprehensive guide to modern web development practices.',
      price: 49,
      image: 'book.jpg',
      category: 'Books'
    },
    {
      id: 5,
      name: 'Smart Home Hub',
      description: 'Control all your smart devices from one central hub.',
      price: 149,
      image: 'hub.jpg',
      category: 'Home'
    },
    {
      id: 6,
      name: 'Laptop Stand',
      description: 'Ergonomic laptop stand for better posture and productivity.',
      price: 79,
      image: 'stand.jpg',
      category: 'Electronics'
    },
    {
      id: 7,
      name: 'Coffee Table Book',
      description: 'Beautiful photography book perfect for your coffee table.',
      price: 35,
      image: 'photobook.jpg',
      category: 'Books'
    },
    {
      id: 8,
      name: 'Denim Jacket',
      description: 'Classic denim jacket with modern fit and style.',
      price: 89,
      image: 'jacket.jpg',
      category: 'Clothing'
    }
  ];
  
  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
  }
}
