// post.service.ts
import { Injectable } from '@angular/core';
import { Ipost } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/Posts';
  constructor(private http: HttpClient) {}

  private posts: Ipost[] = [
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id: 1,
      userid: 1,
      date: new Date('2023-10-01'),
      imgurl: 'https://picsum.photos/id/10/800/400', // Sample image URL
      like: false,
      likes: 15,
      comments: ['Great post!', 'Very helpful.'],
    },
    {
      title: 'Routing in Angular',
      body: 'Understanding routerLink, routes, and navigation.',
      id: 2,
      userid: 2,
      date: new Date('2023-10-05'),
      imgurl: 'https://picsum.photos/id/11/800/400',
      like: true,
      likes: 32,
      comments: ['Clear explanation!'],
    },
    {
      title: 'Dependency Injection',
      body: 'How Angular injects services and manages dependencies.',
      id: 3,
      userid: 3,
      date: new Date('2023-10-10'),
      imgurl: 'https://picsum.photos/id/12/800/400',
      like: false,
      likes: 8,
      comments: [],
    },
    {
      title: 'Angular Services',
      body: 'Creating and using services to share data.',
      id: 4,
      userid: 4,
      date: new Date('2023-10-15'),
      imgurl: 'https://picsum.photos/id/13/800/400',
      like: true,
      likes: 21,
      comments: ['Nice example!'],
    },
    {
      title: 'RxJS Observables',
      body: 'Using observables to handle asynchronous data.',
      id: 5,
      userid: 5,
      date: new Date('2023-10-20'),
      imgurl: 'https://picsum.photos/id/14/800/400',
      like: false,
      likes: 45,
      comments: ['Game-changer!', 'Thanks for sharing.'],
    },
    {
      title: 'Template vs Reactive Forms',
      body: 'Choosing the right form strategy in Angular.',
      id: 6,
      userid: 6,
      date: new Date('2023-10-25'),
      imgurl: 'https://picsum.photos/id/15/800/400',
      like: false,
      likes: 12,
      comments: ['Which one is better?'],
    },
    {
      title: 'Component Communication',
      body: 'Passing data with @Input and @Output decorators.',
      id: 7,
      userid: 7,
      date: new Date('2023-11-01'),
      imgurl: 'https://picsum.photos/id/16/800/400',
      like: true,
      likes: 28,
      comments: ['Works like a charm!'],
    },
    {
      title: 'HTTP Client',
      body: 'Fetching data from APIs using HttpClient module.',
      id: 8,
      userid: 8,
      date: new Date('2023-11-05'),
      imgurl: 'https://picsum.photos/id/17/800/400',
      like: false,
      likes: 36,
      comments: ['How to handle errors?'],
    },
    {
      title: 'Angular Directives',
      body: 'Creating custom directives for DOM manipulation.',
      id: 9,
      userid: 9,
      date: new Date('2023-11-10'),
      imgurl: 'https://picsum.photos/id/18/800/400',
      like: true,
      likes: 19,
      comments: ['Did not know this!', 'Very powerful.'],
    },
  ];

  getPostsApi(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiUrl);
  }

  getPosts(): Ipost[] {
    return [...this.posts];
  }

  getPostApi(id: number): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(`${this.apiUrl}/${id}`);
  }

  addPostApi(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(this.apiUrl, post);
  }

  updatePostApi(post: Ipost): Observable<Ipost> {
    return this.http.put<Ipost>(`${this.apiUrl}/${post.id}`, post);
  }

  deletePostApi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // getPostById(id: number): Ipost | undefined {
  //   return this.posts.find((post) => post.id === id);
  // }

  // getPostsByUser(userId: number): Ipost[] {
  //   return this.posts.filter((post) => post.userid === userId);
  // }

  addPost(post: Ipost): void {
    this.posts.push(post);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  updatePost(updatapost: Ipost) {
    const index = this.posts.findIndex((p) => p.id === updatapost.id);
    this.posts[index] = { ...updatapost };
  }

  comment: string = '';
  addComment(post: Ipost) {
    post.comments.push(this.comment);
    this.comment = '';
  }
}
