import { useTheme } from "@/theme";
import { $, Slot, component$ } from "@builder.io/qwik";
import { useAccordionState } from "./accordionContext";
import { useDetermineDataAttributes } from "./utils";

export const Summary = component$(({ id }: { id: string }) => {
  const { accordion } = useTheme();
  const accordionState = useAccordionState();
  const dataAttributes = useDetermineDataAttributes(id);

  const handleClick = $(() => {
    // If type is single, close all other items
    if (accordionState.type === "single") {
      Object.keys(accordionState.items)
        .filter((key) => key !== id)
        .forEach((key) => {
          accordionState.items[key].isOpen = false;
        });
    }
    // Then toggle the current item
    accordionState.items[id].isOpen = !accordionState.items[id]?.isOpen;
  });

  const renderStartIcon = accordion.variants[accordionState.variant].startIcon$;
  const renderEndIcon = accordion.variants[accordionState.variant].endIcon$;

  return (
    <button
      onClick$={handleClick}
      {...dataAttributes}
      class={accordion.variants[accordionState.variant].summary}
    >
      {renderStartIcon?.({ isOpen: accordionState.items[id].isOpen })}
      <Slot />
      {renderEndIcon?.({ isOpen: accordionState.items[id].isOpen })}
    </button>
  );
});
