import { useContext } from 'react';

import { TranslationContext } from '../../contexts/Translation';

export const useTranslation = () => {
  const trans = useContext(TranslationContext);

  return (key: string): JSX.Element | string => {
    return trans[key] || key;
  };
};
