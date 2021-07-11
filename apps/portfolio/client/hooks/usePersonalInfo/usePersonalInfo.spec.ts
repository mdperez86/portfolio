import React from 'react';
import { usePersonalInfo } from './usePersonalInfo';

import { PersonalInfoContext } from '../../contexts/PersonalInfo';

jest.mock('../../contexts/PersonalInfo', () => ({
  PersonalInfoContext: jest.fn(),
}));

describe('useTranslation', () => {
  const data = {};

  const useContext = jest.spyOn(React, 'useContext');
  
  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue(data);
  });

  afterEach(() => {
    (useContext as jest.Mock).mockReset();
  });

  test('should get the personal info', () => {
    const info = usePersonalInfo();

    expect(useContext).toBeCalledWith(PersonalInfoContext);
    expect(info).toStrictEqual(data);
  });
});
