import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, NgStyle, FormsModule],
  selector: 'app-dynamic-styling',
  styleUrl: './dynamic-styling.css',
  templateUrl: './dynamic-styling.html',
})
export class DynamicStyling {
  oneFriendId: number = 1;
  oneFriendName: string = 'Steven Cigale';
  oneFriendAge: number = 25;
  oneFriendStatus: string = 'Offline';
  oneFriendBio: string = 'Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.';
  oneFriendImgUrl: string = 'https://picsum.photos/seed/picsum/400/200';

  getOneFriendStatus(): string {
    return this.oneFriendStatus;
  }
}
