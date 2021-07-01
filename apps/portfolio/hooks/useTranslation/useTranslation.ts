import { useContext } from 'react';

import { TranslationContext } from '@md/contexts/Translation';

export const useTranslation = () => {
  const trans = useContext(TranslationContext);

  return (key: string): JSX.Element => {
    return trans[key] || key;
  };
};
