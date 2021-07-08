import React from 'react';
import { render } from '@testing-library/react';

import { FlagIcon } from './FlagIcon';

describe('<FlagIcon />', () => {
  const locale = 'en-US';

  test('render', () => {
    const { baseElement } = render(<FlagIcon locale={locale} />);
    expect(baseElement).toBeTruthy();
  });
});
