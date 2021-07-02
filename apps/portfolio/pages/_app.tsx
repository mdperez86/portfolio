import React, { useEffect } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { TranslationProvider } from '../contexts/Translation';

import theme from '../themes/main';

const CustomApp = (props: CustomAppProps) => {
  const { Component, pageProps, trans } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <TranslationProvider value={trans}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </TranslationProvider>
  );
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const { router } = appContext;

  const appProps = await App.getInitialProps(appContext);

  const trans = await import(`../locales/${router.locale}.json`)
    .then(trans => trans.default);

  return { ...appProps, trans }
}

type CustomAppProps = AppProps & {
  trans: unknown;
};

export default CustomApp;
