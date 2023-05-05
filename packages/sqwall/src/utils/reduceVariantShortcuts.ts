// Combine all variant keys from base variants and any shortcutVariants
export const reduceVariantShortcuts = <V>(
  theme: {
    variantShortcuts?: Record<any, Array<keyof V>>;
  },
  variantKeys: Array<keyof V>
) =>
  variantKeys.reduce((acc, variantKey) => {
    return [
      ...acc,
      ...(theme.variantShortcuts?.[variantKey] ?? [variantKey]),
    ] as Array<keyof V>;
  }, [] as Array<keyof V>);
