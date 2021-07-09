import React, { useEffect } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import parser from 'ua-parser-js';

import { TranslationProvider } from '../client/contexts/Translation';
import { useSsrMatchMedia } from '../client/hooks/useSsrMatchMedia';

import theme from '../client/themes/main';

const CustomApp = (props: CustomAppProps) => {
  const { Component, pageProps, trans, deviceType } = props;

  const ssrTheme = useSsrMatchMedia(theme, deviceType);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <TranslationProvider value={trans}>
      <ThemeProvider theme={ssrTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </TranslationProvider>
  );
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const { router, ctx } = appContext;

  const appProps = await App.getInitialProps(appContext);

  const trans = await import(`../locales/${router.locale}.json`)
    .then(trans => trans.default);

  const deviceType = parser(ctx.req.headers['user-agent']).device.type || 'desktop';

  return { ...appProps, trans, deviceType };
}

type CustomAppProps = AppProps & {
  trans: unknown;
  deviceType: string;
};

export default CustomApp;
