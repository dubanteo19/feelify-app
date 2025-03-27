import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDuration(duration: number) {
  const minute = Math.floor(duration / 60);
  const second = duration % 60;
  return `${minute}:${second < 10 ? "0" + second : second}`;
}
