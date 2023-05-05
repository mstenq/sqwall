import { Slot, component$, QwikIntrinsicElements } from "@builder.io/qwik";
import { useTheme } from "../../theme/ThemeProvider";
import { ComponentStyle } from "../../types";
import { calculateStyles } from "../../utils/calculateStyles";
import { ButtonVariantKey } from "./Button.types";
import {} from "@builder.io/qwik/jsx-runtime";

export type HTMLButtonProps = QwikIntrinsicElements["button"];

export type ButtonProps = HTMLButtonProps &
  ComponentStyle & {
    variant?: Array<ButtonVariantKey> | ButtonVariantKey;
  };

export const Button = component$((props: ButtonProps) => {
  const { variant, ...htmlButtonProps } = props;
  const { button } = useTheme();

  return (
    <button
      {...htmlButtonProps}
      {...calculateStyles(
        "root",
        button,
        variant ?? button.defaultVariant,
        props
      )}
    >
      <Slot name="startIcon" />
      <Slot />
      <Slot name="endIcon" />
    </button>
  );
});
