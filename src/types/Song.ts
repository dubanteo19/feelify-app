import { Artist } from "@/types/Artist";

export interface Song {
  id: string;
  title: string;
  thumbnail: string;
  duration?: number;
  artists: Artist[];
  url: string;
}
