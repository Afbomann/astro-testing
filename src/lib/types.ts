export type TPosts = Array<TPost>;

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TComments = Array<TComment>;

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
