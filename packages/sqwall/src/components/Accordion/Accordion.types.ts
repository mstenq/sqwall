import { JSXNode, QRL } from "@builder.io/qwik";

type RenderIconProps = QRL<({ isOpen }: { isOpen: boolean }) => JSXNode>;

export type AccordionThemeProps = {
  accordionRoot: string;
  item: string;
  summary: string;
  detail: string;
  startIcon$?: RenderIconProps;
  endIcon$?: RenderIconProps;
};

export interface AccordionVariant {
  default: true;
}

export type AccordionType = "multiple" | "single";

export type AccordionTheme = {
  defaultVariant: keyof AccordionVariant;
  defaultType: AccordionType;
  variants: Record<keyof AccordionVariant, AccordionThemeProps>;
};

export type AccordionState = {
  variant: keyof AccordionVariant;
  type: AccordionType;
  items: Record<
    string,
    {
      isOpen: boolean;
    }
  >;
};
