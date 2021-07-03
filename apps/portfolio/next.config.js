// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  i18n: {
    locales: ['en-US', 'es-CL'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
  images: {
    domains: ['media-exp1.licdn.com'],
    deviceSizes: [600, 960, 1280, 1920],
  },
});
