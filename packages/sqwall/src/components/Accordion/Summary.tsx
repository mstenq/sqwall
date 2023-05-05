import { useTheme } from "../../theme";
import { $, Slot, component$ } from "@builder.io/qwik";
import { useAccordionState } from "./accordionContext";
import { useDetermineDataAttributes } from "./useDetermineDataAttributes";
import { ComponentStyle } from "../../types";
import { calculateStyles } from "../../utils/calculateStyles";

type AccordionSummaryProps = ComponentStyle & { id: string };

export const Summary = component$(({ id, ...props }: AccordionSummaryProps) => {
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

  // Get start icon from any available variant
  const variantWithStartIcon = accordionState.variantKeys.find(
    (variantKey) => accordion.variants[variantKey].startIcon$
  );
  const renderStartIcon =
    variantWithStartIcon &&
    accordion.variants[variantWithStartIcon]?.startIcon$;

  // get end icon from any available variant
  const variantWithEndIcon = accordionState.variantKeys.find(
    (variantKey) => accordion.variants[variantKey].endIcon$
  );
  const renderEndIcon =
    variantWithEndIcon && accordion.variants[variantWithEndIcon]?.endIcon$;

  return (
    <button
      data-accordion-button
      onClick$={handleClick}
      {...dataAttributes}
      {...calculateStyles(
        "summary",
        accordion,
        accordionState.variantKeys,
        props
      )}
    >
      {renderStartIcon?.({ isOpen: accordionState.items[id].isOpen })}
      <Slot />
      {renderEndIcon?.({ isOpen: accordionState.items[id].isOpen })}
    </button>
  );
});
