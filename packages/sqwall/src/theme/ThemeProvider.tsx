import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import { AccordionTheme } from "@/components";

export type Theme = {
  accordion: AccordionTheme;
};

const ThemeContext = createContextId<Theme>("theme");

type ThemeProviderProps = {
  theme: Theme;
};

export const ThemeProvider = component$(({ theme }: ThemeProviderProps) => {
  useContextProvider(ThemeContext, theme);
  return <Slot />;
});

export const useTheme = () => useContext(ThemeContext);
