import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

import theme from '../themes/main';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {

  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: React.FC) => (props: unknown) => 
          sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles), 
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />

          <meta name='application-name' content='Portfolio' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Portfolio' />
          <meta name='description' content='Best Portfolio in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content={theme.palette.primary.main} />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link rel='apple-touch-icon' href='/icons/favicon.svg' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icons/favicon.svg' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/favicon.svg' />
          <link rel='apple-touch-icon' sizes='167x167' href='/icons/favicon.svg' />

          <link rel='icon' type='image/svg' sizes='32x32' href='/icons/favicon.svg' />
          <link rel='icon' type='image/svg' sizes='16x16' href='/icons/favicon.svg' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/favicon.svg' color={theme.palette.primary.main} />
          <link rel='shortcut icon' href='/icons/favicon.svg' />
              
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://yourdomain.com' />
          <meta name='twitter:title' content='Portfolio' />
          <meta name='twitter:description' content='Best Portfolio in the world' />
          <meta name='twitter:image' content='/icons/favicon.svg' />
          <meta name='twitter:creator' content='@mdperez86' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Portfolio' />
          <meta property='og:description' content='Best Portfolio in the world' />
          <meta property='og:site_name' content='Portfolio' />
          <meta property='og:url' content='https://yourdomain.com' />
          <meta property='og:image' content='/icons/favicon.svg' />

          {/* <!-- apple splash screen images -->
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
