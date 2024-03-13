export type FilmReview = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type AuthorDetails = {
  name: string;
  username: string;
  avatar_path?: string;
  rating?: number;
};
