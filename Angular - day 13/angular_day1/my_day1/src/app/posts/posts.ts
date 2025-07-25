import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/post.model';
import { Post } from '../services/post';
import { FormModule } from '@anuglar/core';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  showform: boolean = false;
  toggleForm() {
    this.showform = !this.showform;
  }

  posts: Ipost[] = [];
  constructor(private postService: Post) {}
  ngOnInit(): void {
    this.posts = this.postService.getposts();
  }

  newpost: Ipost = {
    id: 0,
    date: new Date(),
    title: '',
    body: '',
    userid: 0,
    imgurl: 'https://www.flaticon.com/free-icon/apple_415733',
    like: false,
    likes: 0,
  };
  removepost(id: number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getposts();
  }

  addpost() {
    this.postService.addpots({ ...this.newpost });
    this.posts = this.postService.getposts();
  }

  likecounter(post: Ipost) {
    post.like = true;
    post.likes = +post.likes;
  }
}
