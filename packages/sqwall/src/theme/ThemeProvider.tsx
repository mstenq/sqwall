import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import { AccordionTheme, ButtonTheme } from "../components";

export type Theme = {
  accordion: AccordionTheme;
  button: ButtonTheme;
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
