import React from 'react';
import { useTranslation } from './useTranslation';

import { TranslationContext } from '../../contexts/Translation';

jest.mock('../../contexts/Translation', () => ({
  TranslationContext: jest.fn(),
}));

describe('useTranslation', () => {
  const trans = {
    'valid.key': 'This is a valid translation',
  };

  const useContext = jest.spyOn(React, 'useContext');
  
  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue(trans);
  });

  afterEach(() => {
    (useContext as jest.Mock).mockReset();
  });

  test('should get the translation given a valid key', () => {
    const key = 'valid.key';
    const t = useTranslation();

    expect(useContext).toBeCalledWith(TranslationContext);
    expect(t(key)).toStrictEqual(trans[key]);
  });

  test('should get the key if translations does not exists for that key', () => {
    const key = 'invalid.key';
    const t = useTranslation();

    expect(useContext).toBeCalledWith(TranslationContext);
    expect(t(key)).toStrictEqual(key);
  });
});
