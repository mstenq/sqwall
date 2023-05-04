import type { Theme } from "sqwall";
import { accordion } from "./accordionTheme";

declare module "sqwall" {
  interface AccordionVariant {
    unstyled: true;
  }
}

export const theme: Theme = {
  accordion,
};
