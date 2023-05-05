import { $, Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik";

type UseScopedKeyboardNavigationOptions = {
  wrap?: boolean;
  orientation?: "vertical" | "horizontal";
};

export const useScopedKeyboardNavigation = (
  ref: Signal<Element | undefined>,
  selector: string,
  options?: UseScopedKeyboardNavigationOptions
) => {
  const { wrap, orientation } = {
    wrap: true,
    orientation: "vertical",
    ...options,
  };
  const elements = useSignal<HTMLElement[]>();

  const keyboardHandler = $((e: Event) => {
    if (!elements.value) return;

    const { key, target } = e as KeyboardEvent;

    const index = elements.value.findIndex((el) => el === target);
    const first = 0;
    const length = elements.value.length;
    const last = length - 1;
    const prev = wrap
      ? (index + length - 1) % length
      : Math.max(index - 1, first);
    const next = wrap
      ? (index + length + 1) % length
      : Math.min(index + 1, last);

    if (
      (key === "ArrowUp" && orientation === "vertical") ||
      (key === "ArrowLeft" && orientation === "horizontal")
    ) {
      e.preventDefault();
      elements.value[prev].focus();
    }

    if (
      (key === "ArrowDown" && orientation === "vertical") ||
      (key === "ArrowRight" && orientation === "horizontal")
    ) {
      e.preventDefault();
      elements.value[next].focus();
    }

    if (key === "Home") {
      e.preventDefault();
      elements.value[first].focus();
    }

    if (key === "End") {
      e.preventDefault();
      elements.value[last].focus();
    }
  });

  useVisibleTask$(() => {
    if (!ref.value) return;
    elements.value = Array.from(ref.value.querySelectorAll(selector));

    elements.value.forEach((el) => {
      el.addEventListener("keydown", keyboardHandler);
    });

    return () => {
      if (!elements.value) return;
      elements.value.forEach((el) => {
        el.removeEventListener("keydown", keyboardHandler);
      });
    };
  });
};
