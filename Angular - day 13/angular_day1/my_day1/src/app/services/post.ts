import { Injectable } from '@angular/core';
import { Ipost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class Post {
  private posts: Ipost[] = [
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id: 1,
      userid: 1,
      date: new Date(),
      imgurl: 'https://www.flaticon.com/free-icon/apple_415733',
      like: false,
      likes: 0,
      comments: [],
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id: 2,
      userid: 2,
      date: new Date(),
      imgurl: 'https://www.flaticon.com/free-icon/apple_415733',
      like: true,
      likes: 1,
      comments: [],
    },
  ];
  getposts(): Ipost[] {
    return this.posts;
  }
  addpots(post: Ipost): void {
    this.posts.push(post);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
  updatePost(updatapost: Ipost) {
    const index = this.posts.findIndex((p) => p.id === updatapost.id);
    this.posts[index] = { ...updatapost };
  }
  comment: string = '';
  addcomment(post: Ipost) {
    post.comments.push(this.comment);
    this.comment = '';
  }
}
