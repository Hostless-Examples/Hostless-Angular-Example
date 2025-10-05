import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Contact Us</h1>
        <p class="page-subtitle">Get in touch with our team</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="card">
            <h2>Contact Information</h2>
            <div class="contact-item">
              <h4>Email</h4>
              <p>info&#64;angularapp.com</p>
            </div>
            <div class="contact-item">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div class="contact-item">
              <h4>Address</h4>
              <p>123 Tech Street<br>San Francisco, CA 94105</p>
            </div>
            <div class="contact-item">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <div class="card">
            <h2>Send us a Message</h2>
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name" 
                  required 
                  class="form-control"
                  placeholder="Your full name">
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required 
                  class="form-control"
                  placeholder="your.email@example.com">
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject" 
                  class="form-control"
                  placeholder="What's this about?">
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message" 
                  required 
                  rows="5"
                  class="form-control"
                  placeholder="Tell us more about your inquiry..."></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn" 
                [disabled]="!contactForm.form.valid">
                Send Message
              </button>
            </form>
            
            <div *ngIf="submitted" class="success-message">
              <p>Thank you for your message! We'll get back to you soon.</p>
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
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .card h2 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
    
    .contact-item {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }
    
    .contact-item:last-child {
      border-bottom: none;
    }
    
    .contact-item h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .contact-item p {
      color: #666;
      margin: 0;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 500;
    }
    
    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
    }
    
    .btn:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }
    
    .success-message {
      margin-top: 1rem;
      padding: 1rem;
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      color: #155724;
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .page-header h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  submitted = false;
  
  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }
  }
}
