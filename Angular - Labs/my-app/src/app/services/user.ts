// user.service.ts
import { Injectable } from '@angular/core';
import { Iuser } from '../models/models';
import { Observable, of } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  getPostsApi() {
    return this.http.get(this.apiUrl);
  }

  private users: Iuser[] = [
    {
      id: 1,
      name: 'Ali',
      imgurl: 'https://randomuser.me/api/portraits/men/1.jpg',
      password: 'ali123',
      email: 'ali@example.com',
      username: 'ali',
    },
    {
      id: 2,
      name: 'Mona',
      imgurl: 'https://randomuser.me/api/portraits/women/2.jpg',
      password: 'mona123',
      email: 'mona@example.com',
      username: 'mona',
    },
    {
      id: 3,
      name: 'Ahmed',
      imgurl: 'https://randomuser.me/api/portraits/men/3.jpg',
      password: 'ahmed123',
      email: 'ahmed@example.com',
      username: 'ahmed',
    },
    {
      id: 4,
      name: 'Sara',
      imgurl: 'https://randomuser.me/api/portraits/women/4.jpg',
      password: 'sara123',
      email: 'sara@example.com',
      username: 'sara',
    },
    {
      id: 5,
      name: 'Youssef',
      imgurl: 'https://randomuser.me/api/portraits/men/5.jpg',
      password: 'youssef123',
      email: 'youssef@example.com',
      username: 'youssef',
    },
    {
      id: 6,
      name: 'Laila',
      imgurl: 'https://randomuser.me/api/portraits/women/6.jpg',
      password: 'laila123',
      email: 'laila@example.com',
      username: 'laila',
    },
    {
      id: 7,
      name: 'Khaled',
      imgurl: 'https://randomuser.me/api/portraits/men/7.jpg',
      password: 'khaled123',
      email: 'khaled@example.com',
      username: 'khaled',
    },
    {
      id: 8,
      name: 'Fatma',
      imgurl: 'https://randomuser.me/api/portraits/women/8.jpg',
      password: 'fatma123',
      email: 'fatma@example.com',
      username: 'fatma',
    },
    {
      id: 9,
      name: 'Hassan',
      imgurl: 'https://randomuser.me/api/portraits/men/9.jpg',
      password: 'hassan123',
      email: 'hassan@example.com',
      username: 'hassan',
    },
  ];

  getUsers(): Iuser[] {
    return this.users;
  }

  getUserById(id: number): Iuser | undefined {
    return this.users.find((user) => user.id === id);
  }

  getUserByUsername(username: string): Iuser | undefined {
    return this.users.find((user) => user.username === username);
  }

  getUserByEmail(email: string): Iuser | undefined {
    return this.users.find((user) => user.email === email);
  }

  // validate user by email and password
  validateUser(
    username: string,
    email: string,
    password: string
  ): Iuser | undefined {
    return this.users.find(
      (user) =>
        (user.username === username || user.email === email) &&
        user.password === password
    );
  }

  login(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<Iuser | null> {
    const user = this.validateUser(
      credentials.username,
      credentials.email,
      credentials.password
    );
    return of(user || null);
  }

  loggedInUser: Iuser | null = null;
  setLoggedUser(user: Iuser) {
    this.loggedInUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLogedUser(): Iuser | null {
    if (this.loggedInUser) return this.loggedInUser;

    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        this.loggedInUser = JSON.parse(stored);
        return this.loggedInUser;
      } catch {
        return null;
      }
    }
    return null;
  }

  logOutUser() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
  }
}
