import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-event-binding-exercice',
  styleUrl: './event-binding-exercice.css',
  templateUrl: './event-binding-exercice.html',
})
export class EventBindingExercice {
  listFriendsInputText: string = '';
  listFriendsAuth: boolean = false;
  listFriendsCreationStatus: string = ' Aucun ami ...';

  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";
  }

  onAddingFriends(): void {
    this.listFriendsCreationStatus = "🥳 Votre ami a été ajouté !";
  }
}