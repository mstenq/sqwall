import { useAccordionState } from "./accordionContext";

export const useDetermineDataAttributes = (id: string) => {
  const accordionState = useAccordionState();
  return { "data-state": accordionState.items[id]?.isOpen ? "open" : "closed" };
};
