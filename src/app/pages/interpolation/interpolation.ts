import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-interpolation',
  styleUrl: './interpolation.css',
  templateUrl: './interpolation.html',
})
export class Interpolation {
  maxScore: number = 20;
  currentScore: number = 15;
  user: { firstName: string; lastName: string; role: string } = {
    firstName: 'Alexandre',
    lastName: 'DUPONT',
    role: 'Dev'
  };
  isLoggedIn: boolean = false;
  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
  skills: string[] = ['Angular 22', 'TypeScript', 'DaisyUI'];
}
