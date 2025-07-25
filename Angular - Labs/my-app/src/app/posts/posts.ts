import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Ipost } from '../models/models';
import { PostService } from '../services/post';
import { UserService } from '../services/user';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  showform: boolean = false;
  comment: string = '';

  toggleForm() {
    this.showform = !this.showform;
  }

  toggleCommentSection(post: Ipost) {
    post.showComments = !post.showComments;
  }

  posts: Ipost[] = [];
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  newpost: Ipost = {
    id: 0,
    date: new Date(),
    title: '',
    body: '',
    userid: 0,
    imgurl: 'https://picsum.photos/200/300',
    like: false,
    likes: 0,
    comments: [],
  };

  removePost(id: number): void {
    this.postService.deletePost(id);
    this.posts = this.postService.getPosts();
    this.refreshPosts();
  }

  addPost() {
    const newId = Math.max(...this.posts.map((p) => p.id)) + 1;
    this.newpost.id = newId;

    this.postService.addPost({ ...this.newpost });
    this.posts = this.postService.getPosts();
    this.newpost = {
      id: 0,
      date: new Date(),
      title: '',
      body: '',
      userid: 0,
      imgurl: 'https://picsum.photos/200/300',
      like: false,
      likes: 0,
      comments: [],
    };
    this.showform = false;
  }

  likeCounter(post: Ipost) {
    post.like = !post.like;
    post.likes = post.like ? post.likes + 1 : post.likes - 1;
    this.postService.updatePost(post);
  }

  addComment(post: Ipost) {
    const text = post.newComment?.trim();
    if (text) {
      post.comments.push(text);
      post.newComment = '';
      this.postService.updatePost(post);
    }
  }

  refreshPosts(): void {
    this.posts = this.postService.getPosts();
  }

  getUsernameById(userid: number): string {
    const user = this.userService.getUserById(userid);
    return user ? user.username ?? '' : '';
  }
}
