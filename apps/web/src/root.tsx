import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./global.css";
import { ThemeProvider } from "sqwall";
import { theme } from "./theme/theme";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
        <ThemeProvider theme={theme}>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </QwikCityProvider>
  );
});
