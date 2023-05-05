import { PickVariantsByType } from "../../types/PickVariantsByType";

export type ButtonThemeStyle = {
  root: string;
};

export interface ButtonVariant {
  base: "variant";
}

export type ButtonVariantKey = keyof ButtonVariant;

export type ButtonTheme = {
  defaultVariant: ButtonVariantKey | Array<ButtonVariantKey>;
  variants: Record<
    PickVariantsByType<ButtonVariant, "variant">,
    ButtonThemeStyle
  >;
  variantShortcuts?: Record<
    PickVariantsByType<ButtonVariant, "shortcut">,
    Array<PickVariantsByType<ButtonVariant, "variant">>
  >;
};
