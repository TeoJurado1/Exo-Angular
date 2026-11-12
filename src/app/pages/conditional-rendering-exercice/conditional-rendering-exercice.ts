import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-conditional-rendering-exercice',
  styleUrl: './conditional-rendering-exercice.css',
  templateUrl: './conditional-rendering-exercice.html',
})
export class ConditionalRenderingExercice {
  listFriendsInputText: string = '';
  listFriendsAuth: boolean = false;
  listFriendsCreationStatus:string="🥶 Aucun ami ..."

  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !";
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }

  onAddingFriends(): void {
    this.listFriendsAuth = true;
  }
}
