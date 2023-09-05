import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-autocomplete-users',
  templateUrl: './autocomplete-users.component.html',
  styleUrls: ['./autocomplete-users.component.css'],
})
export class AutocompleteUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  columnasMostrar = ['Name', 'Actions'];

  control: FormControl = new FormControl();

  defaultUserHistory = [
    {
      name: 'Alexander Torrenegra',
      username: 'torrenegra',
      professionalHeadline:
        'Head of Torre. Co-fotrue of Tribe, Bunny Studio, and Voice123. Shark at Shark Tank in LatAm.',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg',
    },
    {
      name: 'Diana Montoya',
      username: 'diana_cujer',
      professionalHeadline:
        'Head of candidate operations at Torre.co \uD83D\uDE80',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1687454502/origin/starrgate/users/profile_96fc4b5ffe9c5344d2ef98b2d8d270bd2a761291.jpg',
    },
    {
      name: 'Laura Natalia Motta Cadena',
      username: 'lauramotta',
      professionalHeadline:
        '\uD83D\uDC69‍\uD83D\uDCBBElectronic Engineer | Data Analyst at Torre \uD83D\uDCCA| \uD83E\uDD13 Data Science & ML Enthusiast | Lifelong Learner ⚡',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1638405605/origin/starrgate/users/profile_11a1b06c49d84fe95bfc9d25230e1d15ac6c7e46.jpg',
    },
    {
      name: 'Luis Felipe Gomez Noy',
      username: 'luisfgomeznoy',
      professionalHeadline: 'International Bussines & Finances',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_752110cc42534606f939061fcd2f052cd2944746.jpg',
    },
    {
      name: 'Juan David Pinilla Boude',
      username: 'jpinilla',
      professionalHeadline: 'Senior Talent Scout at Torre',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1655422348/origin/starrgate/users/profile_d166ec533d83b9d4df24d2b36dd0db6654298aa6.jpg',
    },
    {
      name: 'Laura Méndez Hortua',
      username: 'lauramendezhortua',
      professionalHeadline: 'Account Manager at Torre',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_20d394719f5a2bf26dfd3244c6828bf41ff7339c.jpg',
    },
    {
      name: 'Jorge Carreto Bernal',
      username: 'georgecarretto',
      professionalHeadline:
        'Platform Operations - Costumer Service, Specialist I, Graphic Designer',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_fdcaff6008130bc72682a4ea52f6aae2708451e0.jpg',
    },
    {
      name: 'Cata Morales',
      username: 'maria.c.morales',
      professionalHeadline: 'Head of Agile at Torre',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_6cb811a7cbfc35a578ee2316a029ded6ea90a564.jpg',
    },
    {
      name: 'Federico Romero',
      username: 'fromero10newman13',
      professionalHeadline: 'Head of Platform Operations',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_e36e14c6504473f53688ef0054e5d486ca61756e.jpg',
    },
    {
      name: 'Torre support team',
      username: 'torre-support-team',
      professionalHeadline: 'Torre support team',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1671716648/origin/starrgate/users/profile_1f247936c3ba6e84813b7477483851c20919a03b.jpg',
    },
  ];

  userHistory = [];

  showUsers = [];

  favoritesUsers = [];

  isFavorite = false;

  ngOnInit(): void {
    const historyStorage = this.getHistoryLocalStorage('historySearch');
    const favoriteUsersStorage = this.getHistoryLocalStorage('favoriteUsers');
    if (historyStorage) {
      this.userHistory = historyStorage;
    } else {
      this.userHistory = this.defaultUserHistory;
    }

    if (favoriteUsersStorage) {
      this.favoritesUsers = favoriteUsersStorage;
    }

    this.showUsers = this.userHistory;
    this.control.valueChanges.subscribe((nombre) => {
      if (typeof nombre === 'string') {
        this.usersService.obtenerPorNombre(nombre).subscribe(
          (actores) => {
            this.showUsers = actores.$values;
            if (nombre === '') {
              this.showUsers = this.userHistory;
            }
          },
          (error) => {
            console.error('Error en autocompleteOnInit: ', error);
          }
        );
      }
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.userHistory = this.userHistory.filter(
      (user) => user.username !== event.option.value.username
    );
    if (this.userHistory.length === 10) {
      this.userHistory.pop();
    }
    this.userHistory.unshift(event.option.value);

    this.control.patchValue('');
    if (!this.isFavorite) {
      this.saveHistoryLocalStorage('historySearch', this.userHistory);
      window.open(`https://torre.ai/${event.option.value.username}`, '_blank');
    }
    this.isFavorite = false;
  }

  addFavorite(user: any) {
    this.isFavorite = true;
    let userExists = this.favoritesUsers.find(
      (favoriteUser) => favoriteUser.username === user.username
    );
    if (!!!userExists) {
      this.favoritesUsers.push(user);
    }

    this.usersService.addFavorite(user).subscribe(
      (actores) => {},
      (error) => {
        console.error('Error en autocompleteOnInit: ', error);
      }
    );
    this.saveHistoryLocalStorage('favoriteUsers', this.favoritesUsers);
  }

  deleteFavorite(username: string) {
    this.favoritesUsers = this.favoritesUsers.filter(
      (user) => user.username !== username
    );
    this.saveHistoryLocalStorage('favoriteUsers', this.favoritesUsers);
  }

  saveHistoryLocalStorage(key: string, value: object) {
    const defaultUserHistoryStr = JSON.stringify(value);
    localStorage.setItem(key, defaultUserHistoryStr);
  }

  getHistoryLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
