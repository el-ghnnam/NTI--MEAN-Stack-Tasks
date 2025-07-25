import { Component, Input } from '@angular/core';
import { Iuser } from '../models/user.model';

@Component({
  selector: 'app-date-user',
  standalone: false,
  templateUrl: './date-user.html',
  styleUrl: './date-user.css',
})
export class DateUser {
  users: Iuser[] = [
    {
      id: 1,
      name: 'maostafa tarek',
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s',
      password: '123',
    },
    {
      id: 2,
      name: 'mana ali',
      imgurl:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      password: '356',
    },
  ];
  @Input() userid!: number;
  @Input() date_create!: Date;
  user!: Iuser;
  ngOnInit(): void {
    this.user = this.users.find((u) => u.id === this.userid)!;
  }
}
