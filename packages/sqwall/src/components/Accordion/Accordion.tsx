import { useTheme } from "@/theme/ThemeProvider";
import { calculateStyles } from "@/utils/calculateStyles";
import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  AccordionState,
  AccordionType,
  AccordionVariant,
} from "./Accordion.types";
import { Item } from "./Item";
import { AccordionContext } from "./accordionContext";
import { ComponentStyle } from "@/types";

export type AccordionRootProps = ComponentStyle & {
  color?: string;
  variant?: keyof AccordionVariant;
  type?: AccordionType;
};

const AccordionRoot = component$(
  ({ type, variant, ...props }: AccordionRootProps) => {
    const { accordion } = useTheme();
    const componentVariant = variant ?? accordion.defaultVariant;

    const accordionState = useStore<AccordionState>({
      variant: componentVariant,
      type: type ?? accordion.defaultType,
      items: {},
    });

    useContextProvider(AccordionContext, accordionState);
    return (
      <div
        {...calculateStyles(
          accordion.variants[componentVariant].accordionRoot,
          props
        )}
      >
        <Slot />
      </div>
    );
  }
);

export const Accordion = Object.assign(AccordionRoot, {
  Item,
});
