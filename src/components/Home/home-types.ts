import { string } from "zod";
import { ApiBaseResponse } from "~/types";

export interface HomePageData {
  createdAt: string,
  documentId: string,
  heroSubtitle: string,
  heroTitle: string,
  description: string,
  testimonials: string[],
  heroPicture: {
    width: number,
    height: number,
    url: string
  }
  id: number,
  publishedId: string,
  updatedAt: string,
}
export type HomePageDataResponse = ApiBaseResponse<HomePageData>
