import { Plus_Jakarta_Sans } from "next/font/google";

// Template typeface, scoped to the /services pages via the `.page` wrapper.
export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
