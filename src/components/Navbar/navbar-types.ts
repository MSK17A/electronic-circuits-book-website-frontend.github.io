import { ApiBaseResponse } from "~/types";

export interface NavbarData {
  title: string,
  createdAt: string,
  id: number,
  publishedId: string,
  updatedAt: string,
}
export type NavbarDataResponse = ApiBaseResponse<NavbarData>
