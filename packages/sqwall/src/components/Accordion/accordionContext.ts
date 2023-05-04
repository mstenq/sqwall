import { createContextId, useContext } from "@builder.io/qwik";
import { AccordionState } from "./Accordion.types";

export const AccordionContext =
  createContextId<AccordionState>("accordionState");

export const useAccordionState = () => useContext(AccordionContext);
