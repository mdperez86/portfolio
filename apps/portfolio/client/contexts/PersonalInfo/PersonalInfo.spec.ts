import React from 'react';

describe('PersonalInfoContext', () => {
  test('should create the PersonalInfoContext', async () => {
    const createContext = jest.spyOn(React, 'createContext');
    const {
      PersonalInfoContext, 
      PersonalInfoProvider,
      PersonalInfoConsumer,
    } = await import('.');
    
    expect(createContext).toHaveBeenCalled();
    expect(PersonalInfoContext).toBeTruthy();
    expect(PersonalInfoProvider).toBeTruthy();
    expect(PersonalInfoConsumer).toBeTruthy();
  });
});
