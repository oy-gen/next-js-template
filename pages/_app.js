import { ThemeProvider } from 'styled-components';
import useHydration from '../hooks/useHydration';
import { GlobalStyle, theme } from '../compenents/GlobalStyle';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <>
          <GlobalStyle></GlobalStyle>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
