import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

// Template typeface, scoped to the /services pages via the `.page` wrapper.
export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Headline face of the live vithobaoutreach.com hero tagline.
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});
