import { Theme } from '@material-ui/core/styles';
import mediaQuery from 'css-mediaquery';

export const useSsrMatchMedia = (theme: Theme, deviceType: string) => {
  const deviceWidths = {
    mobile: `${theme.breakpoints.values.xs}px`,
    tablet: `${theme.breakpoints.values.sm}px`,
    desktop: `${theme.breakpoints.values.xl}px`,
  };
  
  const ssrMatchMedia = (query: string) => {
    const matches = mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      type : 'screen',
      width: deviceWidths[deviceType],
    });
    return ({ matches });
  };

  return {
    ...theme,
    components: {
      ...theme.components,
      MuiUseMediaQuery: {
        // Change the default options of useMediaQuery
        defaultProps: { ssrMatchMedia },
      },
    },
  };
};
