import { $ } from "@builder.io/qwik";
import type { AccordionTheme } from "sqwall";
import { ChevronDown } from "@/icons/DownChevron";

declare module "sqwall" {
  interface AccordionVariant {
    unstyled: true;
  }
}

export const accordion: AccordionTheme = {
  defaultVariant: "default",
  defaultType: "multiple",
  variants: {
    default: {
      accordionRoot: "border rounded-lg divide-y overflow-hidden",
      item: "",
      summary:
        "data-[state=open]:bg-blue-50 text-gray-700 flex items-center justify-between bg-gray-50 hover:bg-gray-100 cursor-pointer flex font-bold font-bold focus-visible:bg-gray-100 focus-visible:ring focus-visible:ring-primary-300 rounded focus:border-none focus:outline-none block w-full px-2 py-3 transition-colors duration-300 ease-in-out",
      detail: "leading-6 text-gray-700 hover:text-gray-900 px-2 pt-2 pb-4",
      endIcon$: $(({ isOpen }) => (
        <ChevronDown
          class={`transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      )),
    },
    unstyled: {
      accordionRoot: "",
      item: "",
      summary: "",
      detail: "",
    },
  },
};
