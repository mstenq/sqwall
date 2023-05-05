import { ComponentStyle } from "../types";
import { getAsArray } from "./getAsArray";
import { reduceVariantShortcuts } from "./reduceVariantShortcuts";

export const calculateStyles = <Variant, Theme, Props extends ComponentStyle>(
  styleKey: keyof Theme,
  theme: {
    variants: Record<keyof Variant, Theme>;
    variantShortcuts?: Record<string | number | symbol, Array<keyof Variant>>;
  },
  variant: Array<keyof Variant> | keyof Variant,
  props: Props
) => {
  let classes = `${props.class}`;
  const variantKeys = getAsArray(variant);

  // Combine all variant keys from base variants and any shortcutVariants
  const allVariants = reduceVariantShortcuts(theme, variantKeys);
  // const allVariants = variantKeys.reduce((acc, variantKey) => {
  //   return [...acc, ...(theme.variantShortcuts?.[variantKey] ?? [variantKey])];
  // }, [] as Array<keyof Variant>);

  // Combine all classes of applied variants
  allVariants.forEach((variantKey) => {
    classes += ` ${theme.variants?.[variantKey]?.[styleKey]}`;
  });

  // Does a replacement class even make sense?
  if (props.rClass) {
    classes = props.rClass;
  }
  return { class: classes, style: props.style };
};
