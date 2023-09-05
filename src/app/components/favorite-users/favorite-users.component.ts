import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-users',
  templateUrl: './favorite-users.component.html',
  styleUrls: ['./favorite-users.component.css'],
})
export class FavoriteUsersComponent {
  @Input()
  favoritesUsers;

  columnasMostrar = ['Name', 'Actions'];
}
