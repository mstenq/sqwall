import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { useScopedKeyboardNavigation } from "../../hooks/useScopedKeyboardNavigation";
import { useTheme } from "../../theme/ThemeProvider";
import { ComponentStyle } from "../../types";
import {
  calculateStyles,
  getAsArray,
  reduceVariantShortcuts,
} from "../../utils";
import {} from "../../utils/getAsArray";
import {
  AccordionState,
  AccordionType,
  AccordionVariantKey,
} from "./Accordion.types";
import { Item } from "./Item";
import { AccordionContext } from "./accordionContext";

export type AccordionProps = ComponentStyle & {
  variant?: Array<AccordionVariantKey> | AccordionVariantKey;
  type?: AccordionType;
  wrapFocus?: boolean;
};

const AccordionRoot = component$((props: AccordionProps) => {
  const { accordion } = useTheme();
  const accordionRef = useSignal<Element>();

  useScopedKeyboardNavigation(accordionRef, "[data-accordion-button]", {
    wrap: props.wrapFocus ?? true,
  });

  const accordionState = useStore<AccordionState>({
    variantKeys: reduceVariantShortcuts(
      accordion,
      getAsArray(props.variant ?? accordion.defaultVariant)
    ),
    type: props.type ?? accordion.defaultType,
    items: {},
  });

  useContextProvider(AccordionContext, accordionState);
  return (
    <div
      ref={accordionRef}
      {...calculateStyles(
        "accordionRoot",
        accordion,
        accordionState.variantKeys,
        props
      )}
    >
      <Slot />
    </div>
  );
});

export const Accordion = Object.assign(AccordionRoot, {
  Item,
});
