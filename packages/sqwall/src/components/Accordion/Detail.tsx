import { useTheme } from "@/theme";
import {
  Slot,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { animate } from "motion";
import { useAccordionState } from "./accordionContext";
import { useDetermineDataAttributes } from "./utils";

export const Detail = component$(({ id }: { id: string }) => {
  const initialized = useSignal<boolean>(false);
  const { accordion } = useTheme();
  const accordionState = useAccordionState();
  const dataAttributes = useDetermineDataAttributes(id);

  const isOpen = useComputed$(() => accordionState.items[id]?.isOpen ?? false);
  const elementId = `detail-${id}`;

  const ref = useSignal<Element>();

  useVisibleTask$(async ({ track }) => {
    track(isOpen);
    if (!initialized.value) {
      initialized.value = true;
      return;
    }

    const height = ref?.value?.scrollHeight;
    animate(
      `#${elementId}`,
      {
        opacity: [isOpen.value ? 0 : 1, isOpen.value ? 1 : 0],
        height: [
          isOpen.value ? 0 : `${height}px`,
          isOpen.value ? `${height}px` : 0,
        ],
      },
      {
        duration: 0.3,
        easing: "ease-in-out",
      }
    );
  });

  return (
    <div ref={ref} id={elementId} style={{ height: 0, overflowY: "hidden" }}>
      <div
        {...dataAttributes}
        class={accordion.variants[accordionState.variant].detail}
      >
        <Slot />
      </div>
    </div>
  );
});
