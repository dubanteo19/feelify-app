import { Artist } from "@/types/Artist";

export interface Song {
  id: string;
  title: string;
  thumbnail: string;
  artists: Artist[];
  url: string;
}
