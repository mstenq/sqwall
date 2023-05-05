import { $ } from "@builder.io/qwik";
import type { AccordionTheme } from "sqwall";
import { ChevronDown } from "@/icons/DownChevron";

declare module "sqwall" {
  interface AccordionVariant {
    medium: "variant";
    large: "variant";
    basic: "variant";
    baseLarge: "shortcut";
  }
}

export const accordion: AccordionTheme = {
  defaultVariant: ["base", "medium"],
  defaultType: "multiple",
  variantShortcuts: {
    baseLarge: ["base", "large"],
  },
  variants: {
    base: {
      accordionRoot: "border rounded-lg divide-y",
      item: "group",
      summary: `
        flex w-full justify-between text-gray-700 items-center font-bold 
        group-first:rounded-t-lg group-last:data-[state=closed]:rounded-b-lg
        data-[state=open]:bg-gray-50  
        hover:bg-gray-50 cursor-pointer 
        focus-visible:bg-gray-50 focus:border-none focus-visible:outline focus-visible:outline-violet-600 focus-visible:outline-2 
        transition-all duration-300 ease-in-out`,
      detail: "transition-all duration-300 data-[state=open]:bg-gray-50 leading-6 text-gray-700 hover:text-gray-900 ",
      endIcon$: $(({ isOpen }) => (
        <ChevronDown class={`h-6 w-6 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} />
      )),
    },
    medium: {
      accordionRoot: "",
      item: "",
      summary: "px-2 py-3",
      detail: "px-2 pt-2 pb-4",
    },
    large: {
      accordionRoot: "",
      item: "",
      summary: "text-xl px-3 p-4",
      detail: "text-lg px-3 pt-3 pb-5",
    },
    basic: {
      accordionRoot: "divide-y",
      item: "",
      summary:
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 flex gap-2 items-end text-xl px-3 p-4  w-full",
      detail: "text-lg pl-11 pb-5",
      startIcon$: $(({ isOpen }) => (
        <ChevronDown class={`h-6 w-6 text-sm transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} />
      )),
    },
  },
};
