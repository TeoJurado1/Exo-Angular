import { Component } from '@angular/core';

interface Friend {
  id: number;
  name: string;
  age: number;
  status: string;
  bio: string;
  imgUrl: string;
}

@Component({
  imports: [],
  selector: 'app-property-binding',
  styleUrl: './property-binding.css',
  templateUrl: './property-binding.html',
})
export class PropertyBinding {
  oneFriend: Friend = {
    id: 1,
    name: 'Steven Cigale',
    age: 25,
    status: 'Offline',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: 'https://picsum.photos/400/200',
  };
  getOneFriendStatus(): string {
    return this.oneFriend.status;
  }
}
