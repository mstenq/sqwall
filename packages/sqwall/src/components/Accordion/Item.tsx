import { Slot, component$, useId, useTask$ } from "@builder.io/qwik";
import { Detail } from "./Detail";
import { Summary } from "./Summary";
import { useAccordionState } from "./accordionContext";
import { useTheme } from "@/theme";
import { useDetermineDataAttributes } from "./utils";

export const Item = component$(() => {
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
      class={accordion.variants[accordionState.variant].item}
    >
      <Summary id={id}>
        <Slot name="summary" />
      </Summary>

      <Detail id={id}>
        <Slot />
      </Detail>
    </div>
  );
});
