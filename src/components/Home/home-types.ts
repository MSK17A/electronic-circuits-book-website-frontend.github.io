import { string } from "zod";
import { ApiBaseResponse } from "~/types";

export interface HomePageData {
  createdAt: string;
  documentId: string;
  heroSubtitle: string;
  heroTitle: string;
  description: string;
  testimonials: string[];
  heroPicture: {
    width: number;
    height: number;
    url: string;
  };
  aboutTheBook: string;
  aboutTheAuthor: string;
  author_credentials: AuthorCredentials[];
  id: number;
  publishedId: string;
  updatedAt: string;
}

interface AuthorCredentials {
  description: string;
  icon: string;
}
export type HomePageDataResponse = ApiBaseResponse<HomePageData>;
