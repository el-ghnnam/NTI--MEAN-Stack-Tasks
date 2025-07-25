export interface Ipost {
  title: string;
  body: string;
  id: number;
  userid: number;
  date: Date;
  imgurl: string;
  like: boolean;
  likes: number;
  comments: string[];
  showComments?: boolean;
  newComment?: string;
}

export interface Iuser {
  id: number;
  name: string;
  imgurl: string;
  password: string;
  email?: string;
  username?: string;
}
