export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

export interface Comment {
  postId: number;
  id: number;
  email: string;
  name: string;
  body: string;
}
