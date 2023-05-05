import Sample from "./sample";
import { theme } from "./sample/theme/theme";
import { ThemeProvider } from "./theme";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Sample />
        </ThemeProvider>
      </body>
    </>
  );
};
