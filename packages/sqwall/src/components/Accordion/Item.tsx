import { Slot, component$, useId, useTask$ } from "@builder.io/qwik";
import { Detail } from "./Detail";
import { Summary } from "./Summary";
import { useAccordionState } from "./accordionContext";
import { useTheme } from "../../theme";
import { useDetermineDataAttributes } from "./useDetermineDataAttributes";
import { calculateStyles } from "../../utils/calculateStyles";
import { ComponentStyle } from "../../types";

type AccordionItemProps = ComponentStyle;

export const Item = component$((props: AccordionItemProps) => {
  const id = useId();
  const { accordion } = useTheme();
  const accordionState = useAccordionState();
  const dataAttributes = useDetermineDataAttributes(id);
  useTask$(() => {
    accordionState.items[id] = { isOpen: false };
  });

  return (
    <div
      {...dataAttributes}
      {...calculateStyles("item", accordion, accordionState.variantKeys, props)}
    >
      <span />
      <Summary id={id}>
        <Slot name="summary" />
      </Summary>

      <Detail id={id}>
        <Slot />
      </Detail>
    </div>
  );
});
