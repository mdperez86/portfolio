import React from 'react';

import { ReactComponent as USFlag } from '../../../../public/flags/us.svg';
import { ReactComponent as CLFlag } from '../../../../public/flags/cl.svg';

const map = {
  'en-US': USFlag,
  'es-CL': CLFlag,
};

export const FlagIcon = ({ locale }: { locale: string }) => {
  const Flag = map[locale] || USFlag;
  return <Flag width="26" height="26" />
};
