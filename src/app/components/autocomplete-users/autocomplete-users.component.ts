import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-users',
  templateUrl: './autocomplete-users.component.html',
  styleUrls: ['./autocomplete-users.component.css'],
})
export class AutocompleteUsersComponent implements OnInit {
  constructor() {}

  columnasMostrar = ['Name', 'Actions'];

  control: FormControl = new FormControl();

  users = [
    {
      name: 'Didier Andres LLantén Velez',
      username: 'didiervelez',
      professionalHeadline: 'Ingenieria de Software',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_38b209652c47253e125d5678ec5b46bd6d525995.jpg',
    },
    {
      name: 'Alexander Torrenegra',
      professionalHeadline: 'Head of Torre',
      username: 'torrenegra',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg',
    },
    {
      name: 'Didier Ramos',
      username: 'didier58',
      professionalHeadline: 'Manager of Talent Acquisition',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1631275794/origin/starrgate/users/profile_413c94f7058382b8814043b090060bf59492db61.jpg',
    },
    {
      name: 'Didier Alexander  Revelo',
      username: 'didierrevelo',
      professionalHeadline: 'Desarrollador de software',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1682731438/origin/starrgate/users/profile_e1d078a3ba5aa8b1c80e4e29441e5548e2ed9ff8.jpg',
    },
    {
      name: 'Didier Benjumea',
      username: 'didierbenjumea',
      professionalHeadline:
        'MBA, Engineer, Tech lead, experience on IT for e-business',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_8e3c8d91dcc57263455d1dabfb4ced9a6dd6bbdc.jpg',
    },
    {
      name: 'Didier Emilson Carabali Loboa',
      username: 'didiercarabali',
      professionalHeadline:
        'MBA | Master Data Manager | SAP | Supply Chain | Quality | Project Management',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1639348889/origin/starrgate/users/profile_b2164a20396a2cbee12bbf1f98fd9075e8d2713a.jpg',
    },
    {
      name: 'Didier Vera Otalvaro',
      username: 'didierverao',
      professionalHeadline: 'Mobile and web Senior Application Developer',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1654910259/origin/starrgate/users/profile_62e3462eddd022a22f4ed159fb842362cddb4a82.jpg',
    },
    {
      name: 'Didier Hernandez',
      username: 'didierhernandez',
      professionalHeadline: 'Full Stack Software Developer',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_1870f8d9df347324cf3af70fe8a556ea3061e63b.jpg',
    },
    {
      name: 'Didier Janinton Cuetia Tombe',
      username: 'chato1337',
      professionalHeadline: 'Desarrollador Javascript Fullstack',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_e9d36e9a54507d2825ac99a9546e5cd00a5780b6.jpg',
    },
    {
      name: 'Didier Andrés Potes Herrera',
      username: 'andretypotes',
      professionalHeadline: 'Operario',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1682452520/origin/starrgate/users/profile_25825ba1c63177d6fd5640b64f9d72f40106c722.jpg',
    },
    {
      name: 'Didier Zuñiga',
      username: 'didier35',
      professionalHeadline: 'Software Developer',
      imageUrl:
        'https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_1d43d817f1152804fba47f745d19ed7dbaef7419.jpg',
    },
  ];

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

  userHistory = this.defaultUserHistory;

  showUsers = this.userHistory;

  favoritesUsers = [];

  isFavorite = false;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((stringSearch) => {
      if (typeof stringSearch === 'string') {
        if (stringSearch === '') {
          this.showUsers = this.userHistory;
        } else {
          stringSearch = stringSearch.toLowerCase();
          this.showUsers = this.users;
          this.showUsers = this.showUsers.filter(
            (user) => user.name.toLowerCase().indexOf(stringSearch) !== -1
          );
        }
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
    console.log('Usuarios historial: ', this.userHistory);

    this.control.patchValue('');
    if (!this.isFavorite) {
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
  }

  deleteFavorite(username: string) {
    this.favoritesUsers = this.favoritesUsers.filter(
      (user) => user.username !== username
    );
  }
}
