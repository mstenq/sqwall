import type { ButtonTheme } from "sqwall";

declare module "sqwall" {
  interface ButtonVariant {
    primaryColor: "variant";
    secondaryColor: "variant";
    primary: "shortcut";
    secondary: "shortcut";
  }
}

export const button: ButtonTheme = {
  defaultVariant: "primary",
  variantShortcuts: {
    primary: ["base", "primaryColor"],
    secondary: ["base", "secondaryColor"],
  },
  variants: {
    base: {
      root: `flex gap-2 items-center justify-center rounded-md text-sm font-medium 
      transition-colors focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        h-10 py-2 px-4`,
    },
    primaryColor: {
      root: "text-white bg-gray-800 hover:bg-gray-700 ring-gray-500",
    },
    secondaryColor: {
      root: "text-white bg-cyan-600 hover:bg-cyan-700 ring-cyan-500",
    },
  },
};
