import { JSXNode, QRL } from "@builder.io/qwik";
import { PickVariantsByType } from "../../types/PickVariantsByType";

type RenderIconProps = QRL<({ isOpen }: { isOpen: boolean }) => JSXNode>;

export type AccordionThemeStyle = {
  accordionRoot: string;
  item: string;
  summary: string;
  detail: string;
  startIcon$?: RenderIconProps;
  endIcon$?: RenderIconProps;
};

export interface AccordionVariant {
  base: "variant";
}

export type AccordionVariantKey = keyof AccordionVariant;

export type AccordionType = "multiple" | "single";

export type AccordionTheme = {
  defaultVariant: AccordionVariantKey | Array<AccordionVariantKey>;
  defaultType: AccordionType;
  variants: Record<
    PickVariantsByType<AccordionVariant, "variant">,
    AccordionThemeStyle
  >;
  variantShortcuts?: Record<
    PickVariantsByType<AccordionVariant, "shortcut">,
    Array<PickVariantsByType<AccordionVariant, "variant">>
  >;
};

export type AccordionState = {
  variantKeys: Array<AccordionVariantKey>;
  type: AccordionType;
  items: Record<
    string,
    {
      isOpen: boolean;
    }
  >;
};
