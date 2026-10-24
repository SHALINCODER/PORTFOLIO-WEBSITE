import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Shared page container: header, hero, sections and footer all use it so their edges line up.
export const container = "mx-auto w-full max-w-[90rem] px-5 md:px-8";
